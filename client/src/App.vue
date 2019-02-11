<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListOfPosts/>
  </div>
</template>

<script src='test.js'></script>

<script>
import ListOfPosts from './components/ListOfPosts.vue';

export default {
  name: 'app',
  components: {
    ListOfPosts,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
