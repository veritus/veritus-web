/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import PromiseTable from '../PromiseTable';
import { fetchPromises } from '../../../Stores/Promises/actions';
import { promisesLoaded } from '../../../Stores/Promises/selectors';
import { fetchPoliticians } from '../../../Stores/Politicians/actions';
import { politiciansLoaded } from '../../../Stores/Politicians/selectors';
import type { Dispatch, State, Promise } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  hasLoadedPoliticians: boolean,
  hasLoadedPromises: boolean,
  promises: ?Array<Promise>,
  error: ?string,
  loadPromises: () => void,
  loadPoliticians: () => void,
};

type Props = OwnProps & ReduxProps;

export class PromiseContainer extends React.Component {
  props: Props;

  componentDidMount() {
    const {
      hasLoadedPoliticians,
      hasLoadedPromises,
      loadPoliticians,
      loadPromises,
    } = this.props;

    if (!hasLoadedPromises) {
      loadPromises();
    }
    if (!hasLoadedPoliticians) {
      loadPoliticians();
    }
  }

  render() {
    const { promises, error } = this.props;

    if (error) return <div>Error occurred {error}</div>;
    return <PromiseTable promises={promises} />;
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.promises.error,
    hasLoadedPoliticians: politiciansLoaded(state),
    hasLoadedPromises: promisesLoaded(state),
    promises: state.promises.promises,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadPromises: () => {
      dispatch(fetchPromises());
    },
    loadPoliticians: () => {
      dispatch(fetchPoliticians());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromiseContainer);
