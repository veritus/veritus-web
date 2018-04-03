/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import type { SignUpType } from '../SignUpContainer';
import TextField from 'material-ui/TextField';

export type PropTypes = {
  onSubmit: (data: SignUpType) => void,
};

export class SignUpForm extends React.Component {
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
          <TextField required id="Email" label="Email" margin="normal" />
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
            label="Sign up"
            disabled={!this.state.canSubmit}
          />
        </Paper>
      </div>
    );
  }
}
export default SignUpForm;
