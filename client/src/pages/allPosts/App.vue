<template>
  <div id="app">
    <NavigationBar/>
    <ListOfPosts/>
    <MessageBar/>
  </div>
</template>

<script>
  import ListOfPosts from '../../components/ListOfPosts.vue'
  import MessageBar from '../../components/MessageBar.vue'
  import NavigationBar from '../../components/NavigationBar.vue'

  export default {
    name: 'app',
    components: {
      ListOfPosts,
      MessageBar,
      NavigationBar
    }
  }
</script>
