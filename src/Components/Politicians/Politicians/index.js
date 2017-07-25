/* @flow */
import React from 'react';
import PoliticianCard from '../PoliticianCard';
import { getPoliticans } from '../../../utils/api';
import { promiseCompletionPercentage } from '../../../utils/promises';
import type { PoliticianType } from '../../../types';

export class Politicians extends React.Component {
  state: {
    politicians: Array<PoliticianType>,
  };

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
        {this.state.politicians.map((politician: PoliticianType) =>
          <PoliticianCard
            key={politician.id}
            name={politician.name}
            party={politician.party.name}
            progress={promiseCompletionPercentage(politician.promises)}
            promises={politician.promises}
          />
        )}
      </div>
    );
  }
}

export default Politicians;
