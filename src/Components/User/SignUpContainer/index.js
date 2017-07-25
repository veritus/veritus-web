/* @flow */
import React from 'react';
import { signUp } from '../../../utils/api';
import { saveToken } from '../../../utils/tokenStorage';
import { SignUpForm } from '../SignUpForm';

export type SignUpType = {
  email: string,
  password: string,
};

const submit = (data: SignUpType) => {
  signUp(data.email, data.password).then(resp => {
    const token = resp.key;
    if (token) {
      saveToken(token);
    } else {
      throw new Error('Sign up failed');
    }
  });
};

const SignUpContainer = () => <SignUpForm onSubmit={submit} />;

export default SignUpContainer;
