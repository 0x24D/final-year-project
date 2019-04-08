<template>
  <div id="app">
    <NavigationBar/>
    <md-card>
      <md-card-header>
        <div class="md-title">Welcome to the myBlog website</div>
      </md-card-header>
      <md-card-content>
        Use the navigation bar above to add a new post or view all current posts.
      </md-card-content>
    </md-card>
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
