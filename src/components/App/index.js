import React from 'react';

import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Routes from './Routes';

function App(props) {

  return (
      <div>
        <Switch>
          <Routes/>
        </Switch>
      </div>
    );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
