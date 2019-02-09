import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store, history} from './store';
import { Router } from 'react-router'

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
