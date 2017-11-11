/* @flow */
import React from 'react';
import PartyCard from '../PartyCard';
import { getPoliticalParties } from '../../../utils/api';
export class CaseContainer extends React.Component {
  state = {
    parties: [],
  };
  componentDidMount() {
    getPoliticalParties().then(resp => {
      if (resp.error) {
        console.log('getPoliticalParties error > ', resp.error); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ parties: resp.data });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.parties.map(party => <PartyCard key={party.id} party={party} />)}
      </div>
    );
  }
}
export default CaseContainer;
