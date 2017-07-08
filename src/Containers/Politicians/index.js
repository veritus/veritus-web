/* @flow */
import React from 'react';
import PoliticianCard from '../../Components/PoliticianCard';
import { getPoliticans } from '../../utils/api';
import type { PoliticianType, PromiseType } from '../../types';

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

  promiseCompletionPercentage(promiseList: Array<PromiseType>): number {
    const totalPromises = promiseList.length;
    if (totalPromises === 0) {
      return 0;
    }

    const fulfilledPromises = promiseList.filter(promise => promise.fulfilled);
    /* eslint-disable no-magic-numbers */
    return Math.floor(fulfilledPromises.length / totalPromises * 100);
  }

  render() {
    return (
      <div>
        {this.state.politicians.map((politician: PoliticianType) =>
          <PoliticianCard
            key={politician.id}
            name={politician.name}
            party={politician.party.name}
            progress={this.promiseCompletionPercentage(politician.promises)}
            promises={politician.promises}
          />
        )}
      </div>
    );
  }
}

export default Politicians;
