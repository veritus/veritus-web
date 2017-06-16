/* @flow */
import React from 'react';
import PoliticianCard from '../../Components/PoliticianCard';
import { promises } from '../../utils/testFixtures';
import { getPoliticans } from '../../utils/api';

export class Politicians extends React.Component {
  state = {
    politicians: [],
  };

  componentDidMount() {
    getPoliticans().then(politicians => {
      this.setState({ politicians });
    });
  }

  render() {
    return (
      <div>
        {this.state.politicians.map(politician =>
          <PoliticianCard
            key={politician.id}
            name={`${politician.first_name} ${politician.last_name}`}
            party={politician.party_name}
            progress={politician.promise_completion}
            promises={promises}
          />
        )}
      </div>
    );
  }
}

export default Politicians;
