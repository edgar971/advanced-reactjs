import React from 'react';
import PropTypes from 'prop-types';

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
  },
  date: {
    fontSize: '.85em',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  body: {
    paddingLeft: 20
  }
};

const displayDate = (date) => new Date(date).toDateString();

const Article = ({ article }, { store }) => {
  const author = store.lookupAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <h3 style={styles.title}>{article.title}</h3>
      <p style={styles.date}><small>{displayDate(article.date)}</small></p>
      <div style={styles.author}><a href={author.website}>{`${author.firstName} ${author.lastName}`}</a></div>
      <div style={styles.body}>
        <p>{article.body}</p>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

Article.contextTypes = {
  store: PropTypes.object
};

export default Article;