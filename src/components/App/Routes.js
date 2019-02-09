import React from 'react';
import { Route } from 'react-router-dom';

import startpage from '../Startpage';

export default function Routes () {
  return (
    <Route exact path="/" component={startpage}/>
  )
}
