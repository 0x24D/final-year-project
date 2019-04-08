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
        { from: /\/all/, to: '/all.html' },
        { from: /\/edit/, to: '/edit.html' },
        { from: /\/new/, to: '/new.html' },
        { from: /\/view/, to: '/view.html' },
        { from: /\//, to: '/index.html' },
      ],
    },
  },
  pages: {
    index: {
      entry: './src/pages/index/main.js',
      template: 'public/index.html',
      title: 'Index',
    },
    all: {
      entry: './src/pages/all/main.js',
      template: 'public/index.html',
      title: 'All Posts',
    },
    edit: {
      entry: './src/pages/edit/main.js',
      template: 'public/index.html',
      title: 'Edit Post',
    },
    new: {
      entry: './src/pages/new/main.js',
      template: 'public/index.html',
      title: 'New Post',
    },
    view: {
      entry: './src/pages/view/main.js',
      template: 'public/index.html',
      title: 'View Post',
    },
  },
};
