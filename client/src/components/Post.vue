<template>
  <div id="post">
    <template v-if="showSpinner">
      <md-progress-spinner md-mode="indeterminate" class="centered"></md-progress-spinner>
    </template>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent>
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
      post: {},
      showSpinner: true,
    };
  },
  created() {
    const currentUrl = window.location.pathname.split('/');
    const postId = currentUrl[2];
    this.$axios
      .get(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`)
      .then((response) => {
        this.post = response.data;
        this.showSpinner = false;
      })
      .catch(() => {
        this.$store.commit('setUserMessage', 'Error whilst retrieving post, please try again later.');
      });
  },
  methods: {
    deletePost(postId) {
      this.showSpinner = true;
      this.$axios
        .delete(`http://${window.location.hostname}:8081/api/v1/posts/${postId}`)
        .then(() => {
          this.post = [];
          this.showSpinner = false;
          window.location.href = '/allPosts';
        })
        .catch(() => {
          this.showSpinner = false;
          this.$store.commit('setUserMessage', 'Error whilst deleting post, please try again later.');
        });
    },
    editPost(postId) {
      window.location.href = `/editPost/${postId}`;
    },
  },
};
</script>

<style scoped>
.centered {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
