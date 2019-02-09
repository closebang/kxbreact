import React from 'react';
import { Route } from 'react-router-dom';

import startpage from '../../components/Startpage';

import 'antd/dist/antd.css';


export default function Routes () {
  return (
    <Route exact path="/" component={startpage}/>
  )
}
