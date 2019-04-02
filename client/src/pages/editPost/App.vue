<template>
  <div id="app">
    <NavigationBar/>
    <EditPost/>
  </div>
</template>

<script>
import EditPost from '../../components/EditPost.vue';
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  name: 'app',
  components: {
    EditPost,
    NavigationBar,
  },
};
</script>
