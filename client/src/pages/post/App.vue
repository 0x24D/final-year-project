<template>
  <div id="app">
    <NavigationBar/>
    <Post/>
    <MessageBar/>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import MessageBar from '../../components/MessageBar.vue';
import Post from '../../components/Post.vue';

export default {
  name: 'app',
  components: {
    MessageBar,
    NavigationBar,
    Post,
  },
};
</script>
