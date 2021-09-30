<template>
  <div id="app">
    <TakeHome/>
  </div>
</template>

<script>
import TakeHome from './components/TakeHome'
export default {
  name: 'App',
  components: { TakeHome },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
