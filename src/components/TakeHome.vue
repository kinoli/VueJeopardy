<template>
  <main>
    <header>
      <h1>Jeopardy!</h1>
      <span>
        <h2>Your winnings: <span>${{ winnings }}</span></h2>
        <h2>Your success rate: <span>{{ successRate }}%</span></h2>
      </span>
    </header>
    <!-- Your Component(s) here! -->
    <div class="categories-container">
      <Category v-for="category in categories" :key="category" :name="category" />
    </div>
    <hr>
    <div class="button-container">
      <template v-for="value in values">
        <template v-for="category in categories">
          <TileButton
            :question="categoryQuestionAtPrice(category, value)"
            :key="category + value"
            :inactive="hasAnsweredQuestion(category, value)"
            :correct="isCorrect(category, value)"
            v-model="selectedQuestion"
          />
        </template>
      </template>
    </div>
    <Question :question="selectedQuestion" @answered="onQuestionAnswered" />
    <Completion
      v-if="answers.length && answers.length === questions.length"
      :winnings="winnings"
      :success-rate="successRate"
      @restart="onRestart"
    />
  </main>
</template>

<script>
  import JeopardyGame from '../mixins/Jeopardy';
  import Category from './Category';
  import TileButton from './TileButton';
  import Question from './Question';
  import Completion from './Completion';

  export default {
    name: 'TakeHome',
    mixins:[JeopardyGame],
    components: {
      Category,
      TileButton,
      Question,
      Completion
    },
    data() {
      return {
        questions: [],
        answers: [],
        selectedQuestion: null
        // categories - from mixin
      }
    },
    mounted () {
      this.initQuestions();
    },
    computed: {
      values() {
        return [... new Set(this.questions.map(q => q.value))];
      },
      correctAnswers() {
        return this.answers.filter(a => a.correct) || [];
      },
      winnings() {
        return this.correctAnswers.length ? this.correctAnswers.reduce( (a, b) => {
          return a + b.question.valueInt;
        }, 0) : 0
      },
      successRate() {
        return parseInt(this.correctAnswers.length / this.answers.length * 100, 10) || 0;
      }
    },
    methods: {
      async initQuestions() {
        this.questions = await this.fetchQuestions();
      },
      categoryQuestionAtPrice(category, value) {
        return this.questions.find(q => q.category === category && q.value === value);
      },
      hasAnsweredQuestion(category, value) {
        return this.answers.some(a => a.question.category === category && a.question.value === value);
      },
      isCorrect(category, value) {
        const answer = this.answers.find(a => a.question.category === category && a.question.value === value);
        return answer ? answer.correct : null;
      },
      async onQuestionAnswered(answer) {
        const correct = await this.checkAnswer(this.selectedQuestion.question, answer);
        this.answers.push({ question: this.selectedQuestion, answer, correct });
        this.selectedQuestion = null;
      },
      onRestart() {
        this.initQuestions();
        this.answers = [];
        this.selectedQuestion = null;
      }
    },
  }
</script>

<style lang="scss" scoped>
header {
  margin: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  h2 {
    span {
      color: green;
    }
  }
}

.button-container,
.categories-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

hr {
  margin-bottom: 20px;
}
</style>
