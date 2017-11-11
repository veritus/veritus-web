/* @flow */
import React from 'react';
import PromiseList from '../../Promises/PromiseList';
import { getPromisesByPoliticalParty } from '../../../utils/api';
import type { PartyId, PromiseType } from '../../../types';

export type Props = {
  partyId: PartyId,
};

export class PartyPromises extends React.Component {
  props: Props;

  state: {
    promises: Array<PromiseType>,
  };

  constructor() {
    super();
    this.state = { promises: [] };
  }

  componentDidMount() {
    getPromisesByPoliticalParty(this.props.partyId).then(resp => {
      if (resp.error) {
        console.log('getPromisesByPoliticalParty error > ', getPromisesByPoliticalParty); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ promises: resp.data });
      }
    });
  }

  render() {
    return (
      <div>
        <PromiseList promises={this.state.promises} />
      </div>
    );
  }
}

export default PartyPromises;
