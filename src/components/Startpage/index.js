import React from 'react';
import { Layout } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import Logo from '../Logo';
import style from './style.module.css';

const {
  Header, Footer, Sider, Content,
} = Layout;


function renderForm(props) {
   if(props.startpage && props.startpage.form === 'login') {
     return (<LoginForm {...props}/>);
   }
  return (<RegisterForm {...props}/>);
}

function Startpage(props) {

  return <div>
    <Header className={style.Header}>
      <Logo/>
    </Header>
    <Content className={style.Content}>
      {renderForm(props)}
    </Content>
    <Sider/>
    <Footer/>
  </div>
}

export default Startpage;
