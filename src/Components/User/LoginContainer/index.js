/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { LoginForm } from '../LoginForm';
import type { LoginType } from '../../../utils/api';
import { loginUserThunk } from '../../../Stores/User/actions';

type OwnProps = {};
type ReduxProps = {
  submit: (data: LoginType) => void,
};

type Props = OwnProps & ReduxProps;

const LoginContainer = (props: Props) => <LoginForm onSubmit={props.submit} />;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submit: (data: LoginType) => dispatch(loginUserThunk(data.email, data.password)),
  };
};

const connector: Connector<OwnProps, ReduxProps> = connect(null, mapDispatchToProps);

export default connector(LoginContainer);
