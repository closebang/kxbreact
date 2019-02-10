import React from 'react';

import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
      <Switch>
        <Routes/>
      </Switch>
    );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
