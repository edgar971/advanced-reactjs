import StateApi from 'state-api';
import * as chai from 'chai';
import { data } from '../testData';

chai.should();
const expect = chai.expect;
const api = new StateApi(data);

context('#StateApi specs', () => {
  describe('When getting all articles from testData', () => {
    const { articles } = api.getState();
    const testArticleSize = data.articles.length;
    const returnedNumOfArticles = Object.keys(articles).length;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    it('should return all the expected articles', () => returnedNumOfArticles.should.eql(testArticleSize));
    it('should have the correct title', () => articles[articleId].title.should.be.eql(articleTitle));
    it('should have the correct id', () => articles[articleId].id.should.be.eql(articleId));
  });

  describe('When getting article comments from testData', () => {
    const { comments } = api.getState();
    const testCommentSize = data.comments.length;
    const returnedNumOfComments = Object.keys(comments).length;
    const commentId = data.comments[0].id;
    const commentUsername = data.comments[0].username;
    const comment = api.getComment(commentId);
    
    it('should have the correct number of comments', () => testCommentSize.should.eql(returnedNumOfComments));
    it('should have the correct username', () => comments[commentId].username.should.be.eql(commentUsername));
    it('should have the correct id', () => comments[commentId].id.should.be.eql(commentId));
    it('should retrive the comment', () => comment.should.be.eql(comments[commentId]));
  });


  describe('When getting an article\'s comments from testData', () => {
    const { comments } = api.getState();
    const commentId = data.comments[0].id;
    const comment = api.getComment(commentId);
    const articleId = data.articles[0].id;
    const articleComments = api.getArticleComments(articleId);
   
    it('should retrive the comment', () => comment.should.be.eql(comments[commentId]));
    it('should retrive the article\'s comments', () => articleComments.length.should.be.eql(2));
  });

  describe('When subscribing to state', () => {
    const subscriptingId = api.subscribe();
    
    it('should equal to 1', () => subscriptingId.should.be.to.equal(1));
  });
});

