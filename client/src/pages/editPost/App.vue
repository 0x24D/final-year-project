<template>
  <div id="app">
    <NavigationBar/>
    <EditPost/>
    <MessageBar/>
  </div>
</template>

<script>
  import EditPost from '../../components/EditPost.vue'
  import MessageBar from '../../components/MessageBar.vue'
  import NavigationBar from '../../components/NavigationBar.vue'

  export default {
    name: 'app',
    components: {
      EditPost,
      MessageBar,
      NavigationBar
    }
  }
</script>
