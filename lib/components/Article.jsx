import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';
import CommentList from './CommentList';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 0
  },
  date: {
    fontSize: '.85em',
    margin: 0
  },
  author: {
    paddingBottom: 10
  },
  body: {
    paddingLeft: 20
  },
  comments: {
    paddingLeft: 40
  }
};

const displayDate = (date) => new Date(date).toDateString();

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  };

  render() {
    const { article, author, comments } = this.props;
    return (
      <div style={styles.article}>
        <h3 style={styles.title}>{article.title}</h3>
        <p style={styles.date}><small>{displayDate(article.date)}</small></p>
        <div style={styles.author}><a href={author.website}>{`${author.firstName} ${author.lastName}`}</a></div>
        <div style={styles.body}>
          <p>{article.body}</p>
        </div>
        <div style={styles.comments} >
          <CommentList comments={comments} />
        </div>
      </div>
    );
  }
}

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId), 
    comments: store.getArticleComments(originalProps.article.id)
  };
}

export default storeProvider(extraProps)(Article);