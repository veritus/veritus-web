/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { fetchPromises } from '../../../Stores/Promises/actions';
import { promisesLoaded } from '../../../Stores/Promises/selectors';
import type { Dispatch, State, PromiseType } from '../../../types';
import PromiseTable from '../PromiseTable';

type OwnProps = {};

type ReduxProps = {
  promises: ?Array<PromiseType>,
  hasLoadedPromises: boolean,
  error: ?string,
  fetchPromises: () => void,
};

type Props = OwnProps & ReduxProps;

export class PromiseContainer extends React.Component {
  props: Props;

  componentDidMount() {
    const { hasLoadedPromises } = this.props;
    if (!hasLoadedPromises) {
      this.props.fetchPromises();
    }
  }

  render() {
    const { promises } = this.props;
    if (!promises) return null;

    return <PromiseTable promises={promises} />;
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.promises.error,
    hasLoadedPromises: promisesLoaded(state),
    promises: state.promises.promises,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPromises: () => {
      dispatch(fetchPromises());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PromiseContainer);
