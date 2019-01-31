import {
  getPosts,
  addNewPost,
  deleteAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from '../controllers/blogPostController';

const blogPostRoutes = (app) => {
  app.route('/api/v1/posts')
    .get(getPosts)
    .post(addNewPost)
    .delete(deleteAllPosts);

  app.route('/api/v1/posts/:id')
    .get(getPostById)
    .put(updatePost)
    .delete(deletePost);
};

export default blogPostRoutes;
