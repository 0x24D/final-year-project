<template>
  <div id="app">
    <NavigationBar/>
    <NewPost/>
  </div>
</template>

<script>
import NewPost from '../../components/NewPost.vue';
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  name: 'app',
  components: {
    NewPost,
    NavigationBar,
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
