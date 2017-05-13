/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import type { LoginType } from '../../Containers/LoginContainer';

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
              name="name"
              validations="isWords"
              required
              floatingLabelText="Name"
            />
            <br />
            <FormsyText
              name="shortDescription"
              validations="isWords"
              required
              floatingLabelText="Short Description"
            />
            <br />
            <FormsyText
              name="longDescription"
              validations="isWords"
              multiLine
              rows={2}
              rowsMax={4}
              required
              floatingLabelText="Long Description"
            />
            <br />
            <FormsySelect name="parliamentId" required floatingLabelText="Parliament">
              <MenuItem value={1} primaryText="Test parliament" />
            </FormsySelect>
            <br />
            <br />
            <RaisedButton
              type="submit"
              label="Create Promise"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </div>
    );
  }
}
export default LoginForm;
