import React from 'react';
import logo from './planetromeo.svg';

import { Layout } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { useState } from 'react';

const {
  Header, Footer, Sider, Content,
} = Layout;


function renderForm(props) {
   if(!props.startpage) {
     return (<RegisterForm {...props}/>);
   } else if(props.startpage.form === 'login') {
     return (<LoginForm {...props}/>);
   }
  return (<RegisterForm {...props}/>);
}

function Startpage(props) {

  return <div>
    <Header>
      <img src={logo} className="App-logo" alt="logo" style={{height:50}}/>
    </Header>
    <Content>
      {renderForm(props)}
    </Content>
    <Sider/>
    <Footer/>
  </div>
}

export default Startpage;
