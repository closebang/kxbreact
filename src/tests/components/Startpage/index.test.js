import React, {Component} from 'react';
import { Router } from 'react-router'
import { shallow, mount } from 'enzyme';

import Startpage from '../../../components/Startpage';


it('renders without crashing', () => {
  shallow(<Startpage/>);
});

it('shows the logo', () => {
  const wrapper = mount(<Startpage/>);
  expect(wrapper.find('img').hasClass('App-logo')).toBe(true);
});

it('show the login form', () => {
  const wrapper = mount(<Startpage startpage={{form: 'login'}}/>);
  expect(wrapper.find('.password').length).toBe(1);
});
