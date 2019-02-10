import React from 'react';
import { Input, Button } from 'antd';

function LoginForm() {
  return <div className="testing">
    <p>Username</p>
    <Input/>
    <p className="password">Password</p>
    <Input/>
    <Button>login</Button>
  </div>
}

export default LoginForm;
