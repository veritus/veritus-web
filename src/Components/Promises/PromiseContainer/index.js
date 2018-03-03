/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { fetchPromises } from '../../../Stores/Promises/actions';
import {
  fetchSubjects,
  linkSubjectToPromisesThunk,
} from '../../../Stores/Subjects/actions';
import {
  fetchSubjectsPromises,
  unlinkSubjectPromiseThunk,
} from '../../../Stores/SubjectsPromises/actions';
import {
  promiseSubjectsSelector,
  promisesLoaded,
} from '../../../Stores/Promises/selectors';
import type {
  Dispatch,
  State,
  DecoratedPromise,
  PromiseId,
  SubjectId,
  SubjectPromiseId,
} from '../../../types';
import PromiseTable from '../PromiseTable';

type OwnProps = {};

type ReduxProps = {
  promises: ?Array<DecoratedPromise>,
  hasLoadedPromises: boolean,
  error: ?string,
  getPromises: () => void,
  getSubjects: () => void,
  getSubjectsPromises: () => void,
  linkSubjectToPromises: (promiseIds: Array<PromiseId>, subjectId: SubjectId) => void,
  unlinkSubjectPromise: (subjectPromiseId: SubjectPromiseId) => void,
};

type Props = OwnProps & ReduxProps;

export class PromiseContainer extends React.Component {
  props: Props;

  componentDidMount() {
    const {
      hasLoadedPromises,
      getPromises,
      getSubjects,
      getSubjectsPromises,
    } = this.props;
    if (!hasLoadedPromises) {
      getPromises();
    }

    getSubjects();
    getSubjectsPromises();
  }

  render() {
    const { promises, linkSubjectToPromises, unlinkSubjectPromise } = this.props;
    if (!promises) return null;

    return (
      <PromiseTable
        promises={promises}
        linkSubjectToPromises={linkSubjectToPromises}
        unlinkSubjectPromise={unlinkSubjectPromise}
      />
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
    getPromises: () => {
      dispatch(fetchPromises());
    },
    getSubjects: () => {
      dispatch(fetchSubjects());
    },
    getSubjectsPromises: () => {
      dispatch(fetchSubjectsPromises());
    },
    linkSubjectToPromises: (promiseIds: Array<PromiseId>, subjectId: SubjectId) =>
      dispatch(linkSubjectToPromisesThunk(promiseIds, subjectId)),
    unlinkSubjectPromise: (subjectPromiseId: SubjectPromiseId) =>
      dispatch(unlinkSubjectPromiseThunk(subjectPromiseId)),
  };
};

const connector: Connector<OwnProps, ReduxProps> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PromiseContainer);
