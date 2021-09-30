<template>
  <section>
    <h1>Game over!</h1>
    <h2>Your winnings: ${{winnings}}</h2>
    <h3>Your success rate: {{ successRate }}%</h3>
    <h5>{{ tip }}</h5>
    <button @click="$emit('restart')">Play again!</button>
  </section>
</template>

<script>
  export default {
    name: 'completion',
    props: {
      winnings: {
        type: Number,
        default: 0
      },
      successRate: {
        type: Number,
        default: 0
      }
    },
    computed: {
      tip() {
        if (this.successRate < 20) {
          return 'You really need to spend time playing trivial persuit!';
        } else if (this.successRate < 40) {
          return 'Your mental aptitude is lacking in most areas!';
        } else if (this.successRate < 60) {
          return 'Not bad... but not good either, keep trying!';
        } else if (this.successRate < 80) {
          return 'You probably have decent street smarts, you should play a few more times though!';
        } else if (this.successRate < 95) {
          return 'You rocked the game, still not perfect though!';
        }
        return 'You are a grand master. Now go outside and play!';
      }
    },
  }
</script>

<style lang="scss" scoped>
section {
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

  button {
    background-color: green;
    color: white;
    font-size: 24px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: darkgreen;
    }
  }
}
</style>