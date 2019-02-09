import React from 'react';
import { Input } from 'antd';

function LoginForm() {
  return <div>
    <p>Username</p>
    <Input/>
    <p className="password">Password</p>
    <Input/>
  </div>
}

export default LoginForm;
