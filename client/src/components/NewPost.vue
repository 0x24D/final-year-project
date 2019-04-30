<template>
  <div id="newPost">
    <template v-if="showSpinner">
      <md-progress-spinner md-mode="indeterminate" class="centered"></md-progress-spinner>
    </template>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">New Post</div>
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
          <md-button class="md-primary md-raised"
            @click="newPostSubmit(post._id, post)">Submit</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewPost',
  data() {
    return {
      post: {
        title: '',
        body: '',
        tags: [],
      },
      showSpinner: false,
    };
  },
  methods: {
    newPostSubmit(postId, formData) {
      this.showSpinner = true;
      this.$axios
        .post(`http://${window.location.hostname}:8081/api/v1/posts/`, {
          title: formData.title,
          body: formData.body,
          tags: formData.tags ? formData.tags.split(',') : formData.tags,
        })
        .then(() => {
          window.location.href = '/all';
        })
        .catch(() => {
          this.showSpinner = false;
          this.$store.commit('setUserMessage', 'Error whilst submitting new post, please try again later.');
        });
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
