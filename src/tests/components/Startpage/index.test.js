import React from 'react';
import { Router } from 'react-router'
import { shallow, mount } from 'enzyme';

import Startpage from '../../../components/Startpage';
import Logo from '../../../components/Logo';


it('renders without crashing', () => {
  shallow(<Startpage/>);
});

it('shows the logo', () => {
  const wrapper = mount(<Startpage/>);
  const logo = (<Logo/>)
  expect(wrapper.contains(logo)).toEqual(true);
});

it('show the login form', () => {
  const wrapper = mount(<Startpage startpage={{form: 'login'}}/>);
  expect(wrapper.find('.password').length).toBe(1);
});
