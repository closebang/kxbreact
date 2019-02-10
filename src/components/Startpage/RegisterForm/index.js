import React from 'react';
import { Input, Button } from 'antd';

function RegisterForm({onLoginClick}) {
  return <div>
    <p>Username</p>
    <Input/>
    <p>Email</p>
    <Input/>
    <Button>register</Button>
    <p>or</p>
    <Button onClick={onLoginClick}>Login</Button>
  </div>
}

export default RegisterForm;
