module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 80,
        historyApiFallback: {
          rewrites: [
            { from: /\/index/, to: '/index.html' },
            { from: /\/post/, to: '/post.html' }
          ]
        }
    },
    pages: {
      index: {
        entry: './src/pages/index/main.js',
        template: 'public/index.html',
        title: 'Index'
      },
      post: {
        entry: './src/pages/post/main.js',
        template: 'public/index.html',
        title: 'Post'
      }
    }
};
