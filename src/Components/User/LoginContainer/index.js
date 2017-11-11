/* @flow */
import React from 'react';
import { LoginForm } from '../LoginForm';
import { login } from '../../../utils/api';
import type { LoginType } from '../../../utils/api';
import { saveToken } from '../../../utils/tokenStorage';

const submit = (data: LoginType) => {
  login(data.email, data.password).then(resp => {
    if (resp.error) {
      console.log('Login failed ', resp.error); //eslint-disable-line
    } else if (resp.data) {
      const token = resp.data.key;
      saveToken(token);
    }
  });
};

const LoginContainer = () => <LoginForm onSubmit={submit} />;

export default LoginContainer;
