/* @flow */
import React from 'react';
import type { Match } from 'react-router-dom';
import PromiseList from '../../Components/PromiseList';
import { getPromisesByPoliticalParty } from '../../utils/api';
import type { PromiseType } from '../../types';

export type Props = {
  match: Match,
};

export class PartyPromises extends React.Component {
  state: {
    promises: Array<PromiseType>,
  };

  props: Props;

  constructor() {
    super();
    this.state = { promises: [] };
  }

  componentDidMount() {
    getPromisesByPoliticalParty(this.props.match.params.partyId).then(promises => {
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
