/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import { login } from '../../utils/api';
import { saveToken } from '../../utils/tokenStorage';

export type LoginType = {
  email: string,
  password: string,
};

export class LoginForm extends React.Component {
  state: {
    canSubmit: boolean,
  };
  constructor() {
    super();

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

  submit = (data: LoginType) => {
    login(data.email, data.password).then(data => {
      const token = data.key;
      if (token) {
        saveToken(token);
      } else {
        console.log('Login error');
      }
    });
  };

  render() {
    return (
      <div>
        <Paper zDepth={2}>
          <Formsy.Form
            onValid={() => this.enableButton()}
            onInvalid={() => this.disableButton()}
            onSubmit={this.submit}
          >
            <FormsyText
              name="email"
              validations="isEmail"
              required
              floatingLabelText="Email"
            />
            <br />
            <FormsyText
              name="password"
              validations="isWords"
              required
              floatingLabelText="Password"
              type="password"
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
