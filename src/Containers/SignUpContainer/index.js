/* @flow */
import React from 'react';
import { signUp } from '../../utils/api';
import { saveToken } from '../../utils/tokenStorage';
import { SignUpForm } from '../../Components/SignUpForm';

export type SignUpType = {
  email: string,
  password: string,
};

const submit = (data: SignUpType) => {
  signUp(data.email, data.password).then(data => {
    const token = data.key;
    if (token) {
      saveToken(token);
    } else {
      console.log('Login error');
    }
  });
};

const SignUpContainer = () => <SignUpForm onSubmit={submit} />;

export default SignUpContainer;
