import data from '../data/questions.json';

const fakeAnswers = [
  'Febtober!',
  'I\'m Batman',
  'I don\'t know where it went, I\'m confused.',
  'Threeve. A combination of 3 and 5 and you wagered Texas.'
];

const fakeFetch = (response) => {
  const waitTime = parseInt(Math.random() * 800);
  const p = new Promise((resolve) => setTimeout(() => resolve(response), waitTime));
  return p;
}

export default {
  computed: {
    categories() {
      // get set of the unique categories in the data
      return [... new Set(data.map(({ category }) => category))].slice(0, 5);
    },
  },

  methods: {
    checkAnswer(question, ans) {
      const found = data.find((q) => q.question === question);
      if (!found) {
        return false;
      }
      return fakeFetch(found.answer === ans);
    },

    // Return a list of questions
    fetchQuestions() {
      const questions = data
        .filter(({ category }) => this.categories.includes(category))
        .map(({ category, value, question, answer }) => ({
          category,
          value,
          valueInt: parseInt(value.replace('$', '')),
          question,
          answers: [
            ...fakeAnswers,
            answer
          ]
        }));
      return fakeFetch(questions);
    }
  }
}
