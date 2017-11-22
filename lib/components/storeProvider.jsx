import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => {}) => (Component) => {
  return class extends PureComponent {
    static contextTypes = {
      store: PropTypes.object
    };

    static displayName = `${Component.name}Container`;

    onStoreChange = () => {
      if(this.subscriptionId) {
        this.setState(this.usedState());
      }
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }

    render() {
      return <Component 
        {...this.props} 
        {...this.usedState()} 
        store={this.context.store} />;
    } 
  };
};

export default storeProvider;

