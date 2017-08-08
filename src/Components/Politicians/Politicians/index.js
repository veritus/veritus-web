/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import PoliticianCard from '../PoliticianCard';
import { getPoliticians } from '../../../utils/api';
import { promisesLoaded } from '../../../Stores/Promises/selectors';
import { fetchPromises } from '../../../Stores/Promises/actions';
import { promiseCompletionPercentage } from '../../../utils/promises';
import { fetchPoliticians } from '../../../Stores/Politicians/actions';
import { politiciansLoaded } from '../../../Stores/Politicians/selectors';
import type { Dispatch, State, Politician } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  politicians: ?Array<Politician>,
  hasLoadedPoliticians: boolean,
  hasLoadedPromises: boolean,
  error: ?string,
  fetchPromises: () => void,
  fetchPoliticians: () => void,
};

type Props = OwnProps & ReduxProps;

export class Politicians extends React.Component {
  props: Props;
  state: {
    politicians: Array<Politician>,
  };

  state = {
    politicians: [],
  };

  componentDidMount() {
    getPoliticians().then(politicians => {
      this.setState({ politicians });
    });
  }

  render() {
    return (
      <div>
        {this.state.politicians.map((politician: Politician) =>
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
