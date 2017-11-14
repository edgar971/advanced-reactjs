import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    answer: 30
  }

  asyncFunc = () => {
    return Promise.resolve(54);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>Hi, the answer is {this.state.answer}</h2>
    );
  }


}
ReactDOM.render(<App/>, document.getElementById('root'));