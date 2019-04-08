<template>
  <div id="app">
    <NavigationBar/>
    <NewPost/>
    <MessageBar/>
  </div>
</template>

<script>
import NewPost from '../../components/NewPost.vue';
import MessageBar from '../../components/MessageBar.vue';
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  name: 'app',
  components: {
    NewPost,
    MessageBar,
    NavigationBar,
  },
};
</script>
