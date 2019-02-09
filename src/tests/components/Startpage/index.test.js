import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../components/Startpage';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App/>);
});

