import React, { Component as ReactComponent } from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => {}) => (Component) => {
  return class extends ReactComponent {
    static contextTypes = {
      store: PropTypes.object
    };
    static displayName = `${Component.name}Container`;

    render() {
      return <Component 
        {...this.props} 
        {...extraProps(this.context.store, this.props)} 
        store={this.context.store} />;
    } 
  };
};

export default storeProvider;

