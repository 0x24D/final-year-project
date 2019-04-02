<template>
  <div id="app">
    <NavigationBar/>
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1> Welcome to the myBlog website </h1>
    <h3> Use the navigation bar above to add a new post or view all current posts </h3>
  </div>
</template>

<script>
  import NavigationBar from '../../components/NavigationBar.vue'

  export default {
    name: 'app',
    components: {
      NavigationBar
    }
  }
</script>
