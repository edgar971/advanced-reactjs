import React, { PureComponent } from 'react';
import storeProvider from './storeProvider';

class CommentBox extends PureComponent {
  
  state = {
    username: '',
    body: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { articleId } = this.props;
    this.props.addComment({...this.state, articleId});
    this.setState({username: '', body: ''});
  };
  
  onChange = (e) => {
    const {name, value} = e.target;
    const state = {...this.state};
   
    if(state.hasOwnProperty(name)) {
      state[name] = value;
    }
    
    this.setState(state);
  }


  render() {
    return (
      <div>
        <input type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="name"/>
        <textarea placeholder="Add comment" onChange={this.onChange}  name="body" value={this.state.body}></textarea>
        <button type="submit" onClick={this.handleSubmit} disabled={!this.state.username || !this.state.body} >Submit</button>
      </div>
    );
  }
}

function extraProps(store) {
  return {
    addComment: store.addComment
  };
}

export default storeProvider(extraProps)(CommentBox);