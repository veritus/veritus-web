/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { fetchPromises } from '../../../Stores/Promises/actions';
import { linkSubjectToPromisesThunk } from '../../../Stores/Subjects/actions';
import {
  promiseSubjectsSelector,
  promisesLoaded,
} from '../../../Stores/Promises/selectors';
import type { Dispatch, State, PromiseType, PromiseId, SubjectId } from '../../../types';
import PromiseTable from '../PromiseTable';

type OwnProps = {};

type ReduxProps = {
  promises: ?Array<PromiseType>,
  hasLoadedPromises: boolean,
  error: ?string,
  fetchPromises: () => void,
  linkSubjectToPromises: (promiseIds: Array<PromiseId>, subjectId: SubjectId) => void,
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
    const { promises, linkSubjectToPromises } = this.props;
    if (!promises) return null;

    return (
      <PromiseTable promises={promises} linkSubjectToPromises={linkSubjectToPromises} />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.promises.error,
    hasLoadedPromises: promisesLoaded(state),
    promises: promiseSubjectsSelector(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPromises: () => {
      dispatch(fetchPromises());
    },
    linkSubjectToPromises: (promiseIds: Array<PromiseId>, subjectId: SubjectId) =>
      dispatch(linkSubjectToPromisesThunk(promiseIds, subjectId)),
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PromiseContainer);
