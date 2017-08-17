/* @flow */
import React from 'react';
import { LoginForm } from '../LoginForm';
import { login } from '../../../utils/api';
import type { LoginType } from '../../../utils/api';
import { saveToken } from '../../../utils/tokenStorage';

const submit = (data: LoginType) => {
  login(data.email, data.password).then(resp => {
    const token = resp.key;
    if (token) {
      saveToken('token', token);
    } else {
      throw new Error('Login failed');
    }
  });
};

const LoginContainer = () => <LoginForm onSubmit={submit} />;

export default LoginContainer;
