<template>
  <div id="editPost">
    <form v-on:submit.prevent>
      Title:<br/>
       <input type="text" name="title" v-model="post.title"><br/>
       Body:<br/>
       <textarea name="body" v-model="post.body"/><br/>
       Tags:<br/>
       <div id="tagMenu">
         <div class="tag" v-for="(tag, index) in post.tags" :key="post.tags[index]._id">
           <input type="text" v-model="post.tags[index]"><br/>
         </div>
       </div>
       <br/>
       <br/>
       <input type="submit" value="Edit" @click="editPostSubmit(post._id, post)">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      post: {},
    };
  },
  created() {
    const currentUrl = window.location.pathname.split('/');
    const postId = currentUrl[2];
    this.$axios
      .get(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`)
      .then((response) => {
        this.post = response.data;
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
  methods: {
    editPostSubmit(postId, formData) {
      this.$axios
        .put(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`, {
          title: formData.title,
          body: formData.body,
          tags: formData.tags,
        })
        .then(() => {
          window.location.href = `/post/${postId}`;
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
#tagList ul{
  list-style: none;
}
#tagList li{
  display: inline;
}
</style>
