/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import type { LoginType } from '../../../utils/api';

export type PropTypes = {
  onSubmit: (data: LoginType) => void,
};

export class LoginForm extends React.Component {
  state: {
    canSubmit: boolean,
  };

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      canSubmit: false,
    };
  }
  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render() {
    return (
      <div>
        <Paper zDepth={2}>
          <Formsy.Form
            onValid={() => this.enableButton()}
            onInvalid={() => this.disableButton()}
            onSubmit={this.props.onSubmit}
          >
            <FormsyText
              name="email"
              validations="isEmail"
              required
              floatingLabelText="Email"
              className="qa-login-email"
            />
            <br />
            <FormsyText
              name="password"
              required
              floatingLabelText="Password"
              type="password"
              className="qa-login-password"
            />
            <br />
            <RaisedButton type="submit" label="Login" disabled={!this.state.canSubmit} />
          </Formsy.Form>
        </Paper>
      </div>
    );
  }
}
export default LoginForm;
