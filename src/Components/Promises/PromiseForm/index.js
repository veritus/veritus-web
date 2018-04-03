/* @flow */
import React from 'react';
import Downshift from 'downshift';
import { Card, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';

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
      <Card zDepth={2} style={styles.container}>
        <CardContent>
          <Downshift>
            {politicians.map(politician =>
              <MenuItem
                key={politician.id}
                value={politician.id}
                primaryText={politician.name}
              />
            )}
          </Downshift>

          <Downshift>
            {parties.map(party =>
              <MenuItem key={party.id} value={party.id} primaryText={party.name} />
            )}
          </Downshift>

          <TextField required id="title" label="Promise title" margin="normal" />
          <TextField
            required
            id="shortDescription"
            label="Short Description"
            margin="normal"
          />

          <TextField
            id="longDescription"
            label="Long Description"
            multiline
            required
            rowsMax="4"
            // value={this.state.multiline}
            // onChange={this.handleChange('multiline')}
            margin="normal"
          />
          <Downshift>
            <MenuItem value={1} primaryText="Test parliament" />
          </Downshift>
        </CardContent>
        <CardActions style={styles.submitButton}>
          <Button
            variant="raised"
            type="submit"
            label="Create Promise"
            disabled={!this.state.canSubmit}
          />
        </CardActions>
      </Card>
    );
  }
}
export default PromiseForm;
