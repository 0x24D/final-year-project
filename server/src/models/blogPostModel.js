import mongoose from 'mongoose';

export const BlogPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: 'Enter a title',
  },
  body: {
    type: String,
  },
  tags: {
    type: Array,
  },
});
