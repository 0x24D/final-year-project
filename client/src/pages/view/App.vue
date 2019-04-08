<template>
  <div id="app">
    <NavigationBar/>
    <ViewPost/>
    <MessageBar/>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import MessageBar from '../../components/MessageBar.vue';
import ViewPost from '../../components/ViewPost.vue';

export default {
  name: 'app',
  components: {
    MessageBar,
    NavigationBar,
    ViewPost,
  },
};
</script>
