import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', title: 'best title a'},
      b: { id: 'b', title: 'best title b'}
    }, 
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});