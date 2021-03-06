/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import PoliticianCard from '../PoliticianCard';
import { fetchPoliticians } from '../../../Stores/Politicians/actions';
import { politiciansLoaded } from '../../../Stores/Politicians/selectors';
import type { Dispatch, State, PoliticianType } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  politicians: ?Array<PoliticianType>,
  hasLoadedPoliticians: boolean,
  error: ?string,
  fetchPoliticians: () => void,
};

type Props = OwnProps & ReduxProps;

export class Politicians extends React.Component {
  props: Props;

  componentDidMount() {
    const { hasLoadedPoliticians } = this.props;
    if (!hasLoadedPoliticians) {
      this.props.fetchPoliticians();
    }
  }

  render() {
    const { politicians } = this.props;
    const politicianContainerStyles = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
    };
    return (
      <div style={politicianContainerStyles}>
        {politicians &&
          politicians.map((politician: PoliticianType) =>
            <PoliticianCard key={politician.id} politician={politician} />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.politicians.error,
    hasLoadedPoliticians: politiciansLoaded(state),
    politicians: state.politicians.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPoliticians: () => {
      dispatch(fetchPoliticians());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Politicians);
