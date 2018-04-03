/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import type { LoginType } from '../../../utils/api';
import TextField from 'material-ui/TextField';

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
          <TextField required id="email" label="Email" margin="normal" />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            margin="normal"
          />
          <Button
            variant="raised"
            type="submit"
            label="Login"
            disabled={!this.state.canSubmit}
          />
        </Paper>
      </div>
    );
  }
}
export default LoginForm;
