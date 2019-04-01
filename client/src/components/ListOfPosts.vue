<template>
<div id="posts">
  <div class="post" v-for="post in posts" :key="post._id">
      <h3><a :href="'/post/' + post._id">{{ post.title }}</a></h3>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
