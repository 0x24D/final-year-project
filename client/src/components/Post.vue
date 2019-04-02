<template>
  <div id="post">
    <form novalidate class="md-layout" @submit.prevent>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Post {{ post._id }}</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Title</label>
                <md-input v-model="post.title" readonly/>
              </md-field>
              <md-field>
                <label>Body</label>
                <md-textarea v-model="post.body" readonly/>
              </md-field>
              <md-field>
                <label>Tags</label>
                <!-- eslint-disable vue/valid-v-model -->
                <md-input v-model="post.tags.join(',')" readonly/>
                <!-- eslint-enable -->
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-primary md-raised" @click="editPost(post._id)">Edit</md-button>
          <md-button class="md-primary md-raised" @click="deletePost(post._id)">Delete</md-button>
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
        post: {}
      }
    },
    created() {
      const currentUrl = window.location.pathname.split('/')
      const postId = currentUrl[2]
      this.$axios
        .get(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`)
        .then(response => {
          this.post = response.data
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    },
    methods: {
      deletePost(postId) {
        this.$axios
          .delete(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`)
          .then(() => {
            this.post = []
            window.location.href = '/allPosts'
          })
          .catch(error => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request)
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message)
            }
            console.log(error.config)
          })
      },
      editPost(postId) {
        window.location.href = `/editPost/${postId}`
      }
    }
  }
</script>
