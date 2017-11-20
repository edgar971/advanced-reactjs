import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {
  const WithStore = (props, { store }) => 
    <Component {...props} {...extraProps(store, props)} store={store} />;

  WithStore.contextTypes = {
    store: PropTypes.object
  };

  WithStore.displayName = `${Component.name}Container`;

  return WithStore;
};

export default storeProvider;

