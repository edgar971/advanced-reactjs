import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from '../ArticleList';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { 
        id: 'a', 
        title: 'best title a', 
        date: 'Wed Jul 13 2016 00:00:00 GMT+0000 (UTC)', 
        body: 'cool body'
      },
      b: { 
        id: 'b', 
        title: 'best title b', 
        date: 'Wed Jul 13 2016 00:00:00 GMT+0000 (UTC)', 
        body: 'cool body'
      }
    }, 
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});