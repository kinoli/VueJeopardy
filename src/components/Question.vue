<template>
  <article v-if="question">
    <h1>{{ question.question }}</h1>

      <ul>
        <li v-for="answer in question.answers" :key="answer">
          <button @click="$emit('answered', answer)">
            {{ answer }}
          </button>
        </li>
      </ul>
  </article>
</template>

<script>
  export default {
    name: 'question',
    props: {
      question: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  height: 100vh;
  background-color: blue;
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;

  ul {
    list-style: none;

    li {
      margin-bottom: 20px;
    }

    button {
      background-color: white;
      color: blue;
      border-radius: 10px;
      font-size: 30px;
      padding: 10px;
      cursor: pointer;
      border: none;

      &:hover {
        color: green;
      }
    }
  }
}
</style>