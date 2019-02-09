import React from 'react';
import App from '../../../components/Startpage';

import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import {store, history} from '../../../store';
import { Router } from 'react-router'


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
