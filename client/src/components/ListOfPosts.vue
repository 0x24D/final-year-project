<template>
<div id="posts">
  <template v-if="this.posts.length > 0">
    <md-list>
      <md-list-item v-for="post in posts" :key="post._id">
        <span class="md-list-item-text"><a :href="'/post/' + post._id">{{ post.title }}</a></span>
      </md-list-item>
    </md-list>
  </template>
  <template v-else>
  <md-empty-state
      md-label="There are no posts to show"
      md-description="Add the first post by clicking on 'Add New Post' above.">
    </md-empty-state>
  </template>
</div>
</template>

<script>
export default {
  name: 'ListOfPosts',
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.$axios
      .get(`http://${window.location.hostname}:8081/api/v1/posts/`)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  },
};
</script>
