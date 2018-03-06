/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { SignUpForm } from '../SignUpForm';
import { signUpUserThunk } from '../../../Stores/User/actions';

export type SignUpType = {
  email: string,
  password: string,
};

type OwnProps = {};
type ReduxProps = {
  submit: (data: SignUpType) => void,
};

type Props = OwnProps & ReduxProps;

const SignUpContainer = (props: Props) => <SignUpForm onSubmit={props.submit} />;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submit: (data: SignUpType) => dispatch(signUpUserThunk(data.email, data.password)),
  };
};

const connector: Connector<OwnProps, ReduxProps> = connect(null, mapDispatchToProps);

export default connector(SignUpContainer);
