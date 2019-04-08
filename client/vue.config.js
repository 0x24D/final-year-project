module.exports = {
  // chainWebpack: (config) => {
  //   config.module.rule('eslint').use('eslint-loader').options({
  //     fix: true,
  //   });
  // },
  devServer: {
    disableHostCheck: true,
    port: 80,
    historyApiFallback: {
      rewrites: [
        { from: /\//, to: '/index.html' },
        { from: /\/allPosts/, to: '/allPosts.html' },
        { from: /\/editPost/, to: '/editPost.html' },
        { from: /\/newPost/, to: '/newPost.html' },
        { from: /\/post/, to: '/post.html' },
      ],
    },
  },
  pages: {
    index: {
      entry: './src/pages/index/main.js',
      template: 'public/index.html',
      title: 'Index',
    },
    allPosts: {
      entry: './src/pages/allPosts/main.js',
      template: 'public/index.html',
      title: 'All Posts',
    },
    editPost: {
      entry: './src/pages/editPost/main.js',
      template: 'public/index.html',
      title: 'Edit Post',
    },
    newPost: {
      entry: './src/pages/newPost/main.js',
      template: 'public/index.html',
      title: 'New Post',
    },
    post: {
      entry: './src/pages/post/main.js',
      template: 'public/index.html',
      title: 'Post',
    },
  },
};
