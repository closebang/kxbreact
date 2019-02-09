import React from 'react';
import { Input } from 'antd';

function LoginForm() {
  return <div className="testing">
    <p>Username</p>
    <Input/>
    <p className="password">Password</p>
    <Input/>
  </div>
}

export default LoginForm;
