/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import PromiseTable from '../PromiseTable';
import { fetchPromises } from '../../../Stores/Promises/actions';
import { fetchPoliticians } from '../../../Stores/Politicians/actions';
import { politiciansSelector } from '../../../Stores/Politicians/selectors';
import type { Dispatch, State, PoliticianType, PromiseType } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  promises: ?Array<PromiseType>,
  politicians: ?Array<PoliticianType>,
  error: ?string,
  fetchPromises: () => void,
  fetchPoliticians: () => void,
};

type Props = OwnProps & ReduxProps;

export class PromiseContainer extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.fetchPromises();
    this.props.fetchPoliticians();
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
    politicians: politiciansSelector(state),
    promises: state.promises.promises,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPromises: () => {
      dispatch(fetchPromises());
    },
    fetchPoliticians: () => {
      dispatch(fetchPoliticians());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromiseContainer);
