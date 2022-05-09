import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js'; // imported for you already
import {Provider, connect} from 'react-redux'
import ConnectedCounter from './Counter'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
);
