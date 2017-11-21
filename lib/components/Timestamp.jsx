import React from 'react';
import storeProvider from './storeProvider';

const Timestamp = ({ timestamp }) => {
  return (
    <div>
      {timestamp.toString()}
    </div>
  );
};

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);