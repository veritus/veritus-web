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
    if (resp.error) {
      console.log('signUp failed ', resp.error); //eslint-disable-line
    } else if (resp.data) {
      const token = resp.data.key;
      saveToken(token);
    }
  });
};

const SignUpContainer = () => <SignUpForm onSubmit={submit} />;

export default SignUpContainer;
