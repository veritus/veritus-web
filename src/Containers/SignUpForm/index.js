/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import TextField from 'material-ui/TextField';
import { signUp } from '../../utils/api';

export type SignUpType = {
  email: string,
  password: string,
};

export class SignUpForm extends React.Component {
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

  submit = (data: SignUpType) => {
    signUp(data.email, data.password);
  };

  render() {
    return (
      <div>
        <Paper zDepth={2}>
          <Formsy.Form
            onValid={() => this.enableButton()}
            onInvalid={() => this.disableButton()}
            onValidSubmit={console.log('valid submit')}
            onInvalidSubmit={console.log('invalid submit')}
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
              validations="minLength:8"
              required
              floatingLabelText="Password"
              type="password"
            />
            <br />
            <RaisedButton
              type="submit"
              label="Sign up"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </div>
    );
  }
}
export default SignUpForm;
