import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from 'components/App';
import StateApi from 'state-api';
import config from '../config';

const server = async() => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialData: resp.data,
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />)
  };
};

export default server;