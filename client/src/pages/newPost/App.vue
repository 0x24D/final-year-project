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
