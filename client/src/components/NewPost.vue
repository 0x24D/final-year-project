<template>
  <div id="newPost">
    <form novalidate class="md-layout" @submit.prevent>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">New Post</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Title</label>
                <md-input v-model="post.title"/>
              </md-field>
              <md-field>
                 <label>Body</label>
                 <md-textarea v-model="post.body"/>
              </md-field>
              <md-field>
                 <label>Tags (comma-separated)</label>
                 <md-input v-model="post.tags"/>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
         <md-button class="md-primary md-raised"
            @click="newPostSubmit(post._id, post)">Submit</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      post: {
        title: '',
        body: '',
        tags: [],
      },
    };
  },
  methods: {
    newPostSubmit(postId, formData) {
      this.$axios
        .post(`http://${window.location.hostname}:8081/api/v1/posts/`, {
          title: formData.title,
          body: formData.body,
          tags: formData.tags.split(','),
        })
        .then(() => {
          window.location.href = '/allPosts';
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
