<template>
  <div id="editPost">
    <template v-if="showSpinner">
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </template>
    <form novalidate class="md-layout" @submit.prevent>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Edit Post {{ post._id }}</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Title</label>
                <md-input v-model="post.title" />
              </md-field>
              <md-field>
                <label>Body</label>
                <md-textarea v-model="post.body" />
              </md-field>
              <md-field>
                <label>Tags (comma-separated)</label>
                <md-input v-model="post.tags" />
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-primary md-raised" @click="editPostSubmit(post._id, post)">Submit</md-button>
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
        post: {},
        showSpinner: false,
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
        .catch(() => {
          this.$store.commit('setUserMessage', 'Error whilst retrieving post, please try again later.');
        })
    },
    methods: {
      editPostSubmit(postId, formData) {
        this.showSpinner = true;
        this.$axios
          .put(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`, {
            title: formData.title,
            body: formData.body,
            tags: formData.tags.split(',')
          })
          .then(() => {
            window.location.href = `/post/${postId}`
          })
          .catch(() => {
            this.showSpinner = false;
            this.$store.commit('setUserMessage', 'Error whilst submitting edited post, please try again later.');
          })
      }
    }
  }
</script>
