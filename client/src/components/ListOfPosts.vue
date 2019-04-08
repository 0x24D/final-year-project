<template>
  <div id="posts">
    <template v-if="showSpinner">
      <md-progress-spinner md-mode="indeterminate" class="centered"></md-progress-spinner>
    </template>
    <template v-if="this.posts">
      <template v-if="this.posts.length > 0">
        <md-list>
          <md-list-item v-for="post in posts" :key="post._id">
            <span class="md-list-item-text">
                <a :href="'/post/' + post._id">{{ post.title }}</a></span>
          </md-list-item>
        </md-list>
      </template>
      <template v-else>
      <md-empty-state
          md-label="There are no posts to show"
          md-description="Add the first post by clicking on 'Add New Post' above.">
        </md-empty-state>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ListOfPosts',
  data() {
    return {
      posts: null,
      showSpinner: true,
    };
  },
  created() {
    this.$axios
      .get(`http://${window.location.hostname}:8081/api/v1/posts/`)
      .then((response) => {
        this.showSpinner = false;
        this.posts = response.data;
      })
      .catch(() => {
        this.showSpinner = false;
        this.$store.commit('setUserMessage', 'Error whilst retrieving posts, please try again later.');
      });
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
