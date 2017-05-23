/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import type { PromiseFormType } from '../../utils/api';

export type PropTypes = {
  onSubmit: (data: PromiseFormType) => void,
};

export class PromiseForm extends React.Component {
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
              className="qa-promise-name"
            />
            <br />
            <FormsyText
              name="shortDescription"
              validations="isWords"
              required
              floatingLabelText="Short Description"
              className="qa-promise-short-description"
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
              className="qa-promise-long-description"
            />
            <br />
            <FormsySelect
              name="parliamentId"
              required
              floatingLabelText="Parliament"
              className="qa-promise-parliament-id"
            >
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
export default PromiseForm;
