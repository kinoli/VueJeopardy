<template>
  <button v-if="question" :class="{ inactive, correct }" @click="onClick">
    {{ question.value}}
  </button>
</template>

<script>
  export default {
    name: 'tile-button',
    props: {
      question: {
        type: Object,
        default: () => {}
      },
      inactive: {
        type: Boolean,
        default: false
      },
      correct: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        if (!this.inactive) {
          this.$emit('input', this.question);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
button {
  background-color: blue;
  border-radius: 10px;
  color: yellow;
  font-weight: bold;
  padding: 20px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &.inactive {
    background-color: red;
  }

  &.correct {
    background-color: green;
  }

  &:not(.inactive) {
    cursor: pointer;

    &:hover {
      background-color: purple;
    }
  }
}
</style>