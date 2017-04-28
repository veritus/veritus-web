/* @flow */
import React from 'react';
import { LoginForm } from '../../Components/LoginForm';
import { login } from '../../utils/api';
import { saveToken } from '../../utils/tokenStorage';

export type LoginType = {
  email: string,
  password: string,
};

const submit = (data: LoginType) => {
  login(data.email, data.password).then(data => {
    const token = data.key;
    if (token) {
      saveToken(token);
    } else {
      console.log('Login error');
    }
  });
};

const LoginContainer = () => <LoginForm onSubmit={submit} />;

export default LoginContainer;
