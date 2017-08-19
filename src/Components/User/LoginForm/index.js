/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import type { LoginType } from '../../../utils/api';
import { FacebookLogin } from 'react-facebook-login-component';

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

  responseFacebook(response) {
    fetch(`/api/v1/oauth/facebook?access_token=${response.accessToken}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }).then(() => {
      const csrftoken = document.cookie.replace(
        /(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      localStorage.setItem('token-type', 'csrf');
      localStorage.setItem('veritus-token', csrftoken);
    });
  }

  render() {
    return (
      <div>
        <div>
          <Paper zDepth={2}>
            <Formsy.Form
              onValid={() => this.enableButton()}
              onInvalid={() => this.disableButton()}
              // eslint-disable-next-line react/prop-types
              onSubmit={this.props.onSubmit} // what is the error here?
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
              <RaisedButton
                type="submit"
                label="Login"
                disabled={!this.state.canSubmit}
              />
            </Formsy.Form>
          </Paper>
        </div>
        <div>
          <FacebookLogin
            socialId="108193869861396"
            language="en_US"
            scope="public_profile,email"
            responseHandler={this.responseFacebook}
            xfbml={true}
            fields="id,email,name"
            version="v2.5"
            className="facebook-login"
            buttonText="Login With Facebook"
          />
        </div>
      </div>
    );
  }
}
export default LoginForm;
