/* @flow */
import React from 'react';
import { Match } from 'react-router-dom';
import PromiseList from '../../Components/PromiseList';
import { getPromisesByPoliticalParty } from '../../utils/api';

export type Props = {
  match: Match,
};

export class PartyPromises extends React.Component {
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
