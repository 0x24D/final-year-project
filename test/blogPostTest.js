import chai from 'chai';
import { expect } from 'chai';
import { assert } from 'chai';
import mongoose from 'mongoose';
import app from '../server';

import { BlogPostSchema } from '../src/models/blogPostModel';

const chaiHttp = require('chai-http');

const should = chai.should();

const BlogPost = mongoose.model('blogPost', BlogPostSchema);

chai.use(chaiHttp);

describe('Blog post tests', () => {
  var post1Id;
  var post2Id;
  beforeEach((done) => {
    const newPost1 = new BlogPost({
      title: 'Post 1',
      body: 'This is the first post',
      tags: ['post', 'one', 'first'],
    });
    post1Id = String(newPost1._id);
    const newPost2 = new BlogPost({
      title: 'Post 2',
      body: 'This is the second post',
      tags: ['post', 'two', 'second'],
    });
    post2Id = String(newPost2._id);
    BlogPost.insertMany([newPost1, newPost2], () => {
      done();
    });
  });

  afterEach((done) => {
    BlogPost.collection.drop();
    done();
  });

  it('should error on /v1/posts GET', (done) => {
    chai.request(app)
      .get('/v1/posts')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts POST', (done) => {
    chai.request(app)
      .post('/v1/posts')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts PUT', (done) => {
    chai.request(app)
      .put('/v1/posts')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts DELETE', (done) => {
    chai.request(app)
      .del('/v1/posts')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts/<id> GET', (done) => {
    chai.request(app)
      .get('/v1/posts/123')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts/<id> POST', (done) => {
    chai.request(app)
      .post('/v1/posts/123')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts/<id> PUT', (done) => {
    chai.request(app)
      .put('/v1/posts/123')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should error on /v1/posts/<id> DELETE', (done) => {
    chai.request(app)
      .del('/v1/posts/123')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
