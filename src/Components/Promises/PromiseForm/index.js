/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import type { PromiseFormType } from '../../../utils/api';
import type { PoliticianType } from '../../../types';
import type { Party } from '../../Parties/types';

const styles = {
  container: {
    padding: '12px 24px',
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export type PropTypes = {
  onSubmit: (data: PromiseFormType) => void,
  parties: Array<Party>,
  politicians: ?Array<PoliticianType>,
};

export class PromiseForm extends React.Component {
  state: {
    canSubmit: boolean,
    validMappings: boolean,
  };

  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      canSubmit: false,
      validMappings: false,
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

  validateMappings() {
    this.setState({
      validMappings: true,
    });
  }

  validMap() {
    return this.state.validMappings;
  }

  render() {
    const { parties, politicians } = this.props;
    if (!politicians) return null;
    return (
      <div>
        <Paper zDepth={2} style={styles.container}>
          <Formsy.Form
            onValid={() => this.enableButton()}
            onInvalid={() => this.disableButton()}
            onSubmit={this.props.onSubmit}
          >
            <FormsySelect
              name="politicianId"
              floatingLabelText="Politician"
              className="qa-promise-politician-id"
              validations={{
                mappings: () => this.validMap(),
              }}
              onChange={() => this.validateMappings()}
              fullWidth
            >
              {politicians.map(politician =>
                <MenuItem
                  key={politician.id}
                  value={politician.id}
                  primaryText={politician.name}
                />
              )}
            </FormsySelect>
            <br />
            <FormsySelect
              name="partyId"
              floatingLabelText="Party"
              className="qa-promise-party-id"
              validations={{
                mappings: () => this.validMap(),
              }}
              onChange={() => this.validateMappings()}
              fullWidth
            >
              {parties.map(party =>
                <MenuItem key={party.id} value={party.id} primaryText={party.name} />
              )}
            </FormsySelect>
            <br />
            <FormsyText
              name="name"
              validations="isWords"
              required
              floatingLabelText="Promise title"
              className="qa-promise-name"
              fullWidth
            />
            <br />
            <FormsyText
              name="shortDescription"
              validations="isWords"
              required
              floatingLabelText="Short Description"
              className="qa-promise-short-description"
              fullWidth
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
              fullWidth
            />
            <br />
            <FormsySelect
              name="parliamentId"
              required
              floatingLabelText="Parliament"
              className="qa-promise-parliament-id"
              fullWidth
            >
              <MenuItem value={1} primaryText="Test parliament" />
            </FormsySelect>
            <br />
            <br />
            <div style={styles.submitButton}>
              <RaisedButton
                type="submit"
                label="Create Promise"
                disabled={!this.state.canSubmit}
              />
            </div>
          </Formsy.Form>
        </Paper>
      </div>
    );
  }
}
export default PromiseForm;
