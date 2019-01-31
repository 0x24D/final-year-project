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
  let post1Id;
  let post2Id;
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

  it('should list all posts on /v1/posts GET', (done) => {
    chai.request(app)
      .get('/v1/posts')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        expect(res.body).to.have.lengthOf(2);
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('title');
        res.body[0].should.have.property('body');
        res.body[0].should.have.property('tags');
        res.body[0]._id.should.equal(post1Id);
        res.body[0].title.should.equal('Post 1');
        res.body[0].body.should.equal('This is the first post');
        res.body[0].tags.should.be.a('array');
        expect(res.body[0].tags).to.have.lengthOf(3);
        res.body[0].tags[0].should.equal('post');
        res.body[0].tags[1].should.equal('one');
        res.body[0].tags[2].should.equal('first');
        res.body[1].should.have.property('_id');
        res.body[1].should.have.property('title');
        res.body[1].should.have.property('body');
        res.body[1].should.have.property('tags');
        res.body[1]._id.should.equal(post2Id);
        res.body[1].title.should.equal('Post 2');
        res.body[1].body.should.equal('This is the second post');
        res.body[1].tags.should.be.a('array');
        expect(res.body[1].tags).to.have.lengthOf(3);
        res.body[1].tags[0].should.equal('post');
        res.body[1].tags[1].should.equal('two');
        res.body[1].tags[2].should.equal('second');
        done();
      });
  });

  it('should add new post on /v1/posts POST', (done) => {
    chai.request(app)
    .post('/v1/posts')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({
      title: 'Post 3',
      body: 'This is the third post',
      tags: ['post', 'three', 'third'],
    })
    .end((err, res) => {
      res.should.have.status(201);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('_id');
      res.body.should.have.property('title');
      res.body.should.have.property('body');
      res.body.should.have.property('tags');
      res.body.title.should.equal('Post 3');
      res.body.body.should.equal('This is the third post');
      res.body.tags.should.be.a('array');
      expect(res.body.tags).to.have.lengthOf(3);
      res.body.tags[0].should.equal('post');
      res.body.tags[1].should.equal('three');
      res.body.tags[2].should.equal('third');
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

  it('should delete all posts on /v1/posts DELETE', (done) => {
    chai.request(app)
      .del('/v1/posts')
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });

  it('should list 1 post on /v1/posts/<id> GET', (done) => {
    chai.request(app)
      .get(`/v1/posts/${post1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('title');
        res.body.should.have.property('body');
        res.body.should.have.property('tags');
        res.body._id.should.equal(post1Id);
        res.body.title.should.equal('Post 1');
        res.body.body.should.equal('This is the first post');
        res.body.tags.should.be.a('array');
        expect(res.body.tags).to.have.lengthOf(3);
        res.body.tags[0].should.equal('post');
        res.body.tags[1].should.equal('one');
        res.body.tags[2].should.equal('first');
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

  it('should update 1 post on /v1/posts/<id> PUT', (done) => {
    chai.request(app)
      .put(`/v1/posts/${post1Id}`)
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        title: 'Post 1 (updated)',
        body: 'This is the updated first post',
        tags: ['post', 'one', 'first', 'updated'],
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('title');
        res.body.should.have.property('body');
        res.body.should.have.property('tags');
        res.body._id.should.equal(post1Id);
        res.body.title.should.equal('Post 1 (updated)');
        res.body.body.should.equal('This is the updated first post');
        res.body.tags.should.be.a('array');
        expect(res.body.tags).to.have.lengthOf(4);
        res.body.tags[0].should.equal('post');
        res.body.tags[1].should.equal('one');
        res.body.tags[2].should.equal('first');
        res.body.tags[3].should.equal('updated');
        done();
      });
  });

  it('should delete 1 post on /v1/posts/<id> DELETE', (done) => {
    chai.request(app)
      .del(`/v1/posts/${post1Id}`)
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });
});
