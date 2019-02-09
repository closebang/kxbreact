import React, { Component } from 'react';
import logo from './planetromeo.svg';
import './App.css';

import { connect } from 'react-redux';

import { startpageInitAction } from './actions/Startpage';

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.simpleAction}>Test redux action</button>
          <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(startpageInitAction())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
