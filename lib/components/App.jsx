import React, { Component } from 'react';
import DataApi from 'state-api';
import { data } from '../testData';
import ArticleList from './ArticleList';

const Api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: Api.getArticles(),
      authors: Api.getAuthors()
    };
  }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;