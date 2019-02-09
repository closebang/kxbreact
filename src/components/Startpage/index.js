import React from 'react';
import logo from './planetromeo.svg';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { useState } from 'react';

const {
  Header, Footer, Sider, Content,
} = Layout;


function Startpage({form}) {

  const [formStatus] = useState(form);

  return <div>
    <Header>
      <img src={logo} className="App-logo" alt="logo" style={{height:50}}/>
    </Header>
    <Content>
      {formStatus === 'login' ? <LoginForm/> : <RegisterForm />}
    </Content>
    <Sider/>
    <Footer/>
  </div>
}

export default connect()(Startpage);
