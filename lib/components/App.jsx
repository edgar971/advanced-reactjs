import React, { Component } from 'react';
import DataApi from '../DataApi';
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

  render() {
    return (
     <ArticleList 
      articles={this.state.articles}
      authors={this.state.authors}
     />
    );
  }
}

export default App;