import React from 'react';
import PromiseList from '../../Promises/PromiseList';
import { getPromisesByPoliticalParty } from '../../../utils/api';
import type { PartyIdType, Promise } from '../../../types';

export type Props = {
  partyId: PartyIdType,
};

export class PartyPromises extends React.Component {
  props: Props;

  state: {
    promises: Array<Promise>,
  };

  constructor() {
    super();
    this.state = { promises: [] };
  }

  componentDidMount() {
    getPromisesByPoliticalParty(this.props.partyId).then(promises => {
      this.setState({ promises });
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
