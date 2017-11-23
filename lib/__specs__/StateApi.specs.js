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

    it('should return all the expected articles', () => returnedNumOfArticles.should.equal(testArticleSize));
    it('should have the correct title', () => articles[articleId].title.should.be.eql(articleTitle));
    it('should have the correct id', () => articles[articleId].id.should.be.eql(articleId));
  });
});
