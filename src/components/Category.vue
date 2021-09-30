<template>
  <div class="category">
    {{ name }}
  </div>
</template>

<script>
  export default {
    name: 'category',
    props: {
      name: {
        type: String,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
.category {
  background-color: blue;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 20px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>