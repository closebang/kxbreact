import React from 'react';
import Startpage from '../../../containers/Startpage';
import { Provider } from 'react-redux';
import {store, history} from '../../../store';
import { Router } from 'react-router'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow( <Provider store={store}>
    <Router history={history}>
      <Startpage/>
    </Router>
  </Provider>,);
});





