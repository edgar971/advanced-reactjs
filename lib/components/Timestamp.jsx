import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  static timeDisplay = (timestamp) => 
    timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

  render() {
    return (
      <div>
        {this.props.timestampDispay}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestampDispay: Timestamp.timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);