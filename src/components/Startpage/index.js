import React from 'react';
import logo from '../Startpage/planetromeo.svg';
import { connect } from 'react-redux';

function Startpage() {
  return <div>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
}

export default connect()(Startpage);
