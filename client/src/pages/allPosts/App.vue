<template>
  <div id="app">
    <NavigationBar/>
    <ListOfPosts/>
  </div>
</template>

<script>
import ListOfPosts from '../../components/ListOfPosts.vue';
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  name: 'app',
  components: {
    ListOfPosts,
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
