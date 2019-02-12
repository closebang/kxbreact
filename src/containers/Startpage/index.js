import React from 'react'
import { connect } from 'react-redux';

import StartpageComponent from '../../components/Startpage';
import { showLogin } from "../../actions/Startpage";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  showLogin: () => dispatch(showLogin())
});

class Startpage extends React.Component {

  showLogin = () => {
   this.props.showLogin();
  }

  render() {
    return <StartpageComponent onShowLogin={this.showLogin} {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Startpage);
