/* @flow */
import React from 'react';
import PoliticianCard from '../../Components/PoliticianCard';
import { politicians, promises } from '../../utils/testFixtures';

export class Politicians extends React.Component {
  render() {
    return (
      <div>
        {politicians.map(politician =>
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
