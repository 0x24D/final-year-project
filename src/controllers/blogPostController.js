import mongoose from 'mongoose';
import { BlogPostSchema } from '../models/blogPostModel';

const BlogPost = mongoose.model('blogPost', BlogPostSchema);

export const getPosts = (req, res) => {
  BlogPost.find({}).lean().exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(post);
    }
  });
};

export const addNewPost = (req, res) => {
  const newFile = new BlogPost(req.body);
  newFile.save((err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(post);
    }
  });
};

export const deleteAllPosts = (req, res) => {
  BlogPost.deleteMany({}, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }
  });
};

export const getPostById = (req, res) => {
  BlogPost.findById(req.params.id).lean().exec((err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(file);
    }
  });
};

export const updatePost = (req, res) => {
  const updatedContents = new BlogPost({
    _id: req.params.id,
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags,
  });
  BlogPost.findOneAndUpdate({ _id: req.params.id }, updatedContents,
    { new: true }, (err, updatedPost) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(updatedPost);
      }
    });
};

export const deletePost = (req, res) => {
  BlogPost.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }
  });
};
