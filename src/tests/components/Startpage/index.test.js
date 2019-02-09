import React from 'react';
import { Router } from 'react-router'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import App from '../../../components/Startpage';
import { store, history } from '../../../store';

it('renders without crashing', () => {
  shallow(<App/>);
});

it('shows the logo', () => {
  const wrapper = mount(<Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>);

  expect(wrapper.find('img').hasClass('App-logo')).toBe(true);
});

it('show the login form', () => {
  const wrapper = mount(<Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>);
});
