<template>
  <div id="app">
    <NavigationBar/>
    <Post/>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import Post from '../../components/Post.vue';

export default {
  name: 'app',
  components: {
    NavigationBar,
    Post,
  },
};
</script>
