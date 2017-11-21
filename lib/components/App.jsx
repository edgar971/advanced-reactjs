import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.state.unsubscribe(this.subscriptionId);
  }

  // this only returns the data so we need to subscribe to it for changes
  state = this.props.store.getState();

  render() {
    let { searchTerm, articles } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');

    if(searchTerm) {
      articles = pickBy(articles, (article) => {
        return article.title.match(searchRE) || article.body.match(searchRE);
      });
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;