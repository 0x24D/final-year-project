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
