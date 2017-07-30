/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import PromiseTable from '../PromiseTable';
import { fetchPromises } from '../../../Stores/Promises/actions';
import type { Dispatch, State, PromiseType } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  promises: ?Array<PromiseType>,
  error: ?string,
  fetchPromises: () => void,
};

type Props = OwnProps & ReduxProps;

export class PromiseContainer extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.fetchPromises();
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

export default connect(mapStateToProps, mapDispatchToProps)(PromiseContainer);
