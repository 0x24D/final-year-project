<template>
  <div id="navBar">
    <md-toolbar class="md-primary">
      <h3 class="md-title" style="flex: 1">myBlog</h3>
      <md-button href="/">Home</md-button>
      <md-button href="/new">Add New Post</md-button>
      <md-button href="/all">View All Posts</md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>
