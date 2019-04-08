<template>
  <div id="messageBar">
    <md-snackbar md-position="center" :md-active="!!this.$store.state.userMessage" md-persistent>
      <span>{{ this.$store.state.userMessage }}</span>
    </md-snackbar>
  </div>
</template>

<script>
  export default {
    name: 'MessageBar'
  }
</script>
