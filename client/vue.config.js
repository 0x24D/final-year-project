module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 80,
        historyApiFallback: {
          rewrites: [
            { from: /\/index/, to: '/index.html' },
            { from: /\/allPosts/, to: '/allPosts.html' },
            { from: /\/post/, to: '/post.html' },
          ]
        }
    },
    pages: {
      index: {
        entry: './src/pages/index/main.js',
        template: 'public/index.html',
        title: 'Index'
      },
      allPosts: {
        entry: './src/pages/allPosts/main.js',
        template: 'public/index.html',
        title: 'All Posts'
      },
      post: {
        entry: './src/pages/post/main.js',
        template: 'public/index.html',
        title: 'Post'
      }
    }
};
