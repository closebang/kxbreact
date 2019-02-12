import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import { shallow, mount } from 'enzyme';

import {store, history} from '../../../store';

import Startpage from '../../../containers/Startpage';
import { Button } from 'antd';

it('renders without crashing', () => {
  shallow( <Provider store={store}>
    <Router history={history}>
      <Startpage/>
    </Router>
  </Provider>,);
});

it('on login click renders login form', () => {
  const wrapper = mount(<Provider store={store}>
    <Router history={history}>
      <Startpage/>
    </Router>
  </Provider>);

  wrapper.find('.toLogin > span').simulate("click", { button: 0 });

  expect(wrapper.find('.password').length).toBe(1);
});





