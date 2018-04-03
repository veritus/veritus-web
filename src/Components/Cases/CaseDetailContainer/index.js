/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import type { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import CaseDetail from '../CaseDetail';
import { fetchCaseById } from '../../../Stores/Cases/actions';
import type { Case } from '../../../Stores/Cases/types';
import type { Dispatch, State, MatchTypeCaseId } from '../../../types';
import { caseById } from '../../../Stores/Cases/selectors';
import { voteRecordByCaseId } from '../../../Stores/Votes/selectors';
import type { VoteRecord } from '../../../Stores/Votes/types';
import { fetchVoteRecordByCaseId } from '../../../Stores/Votes/actions';

export type OwnProps = {
  match: MatchTypeCaseId,
};

type ReduxProps = {
  parliamentCase: ?Case,
  voteRecord: ?VoteRecord,
  hasLoadedCases: boolean,
  error: ?string,
  fetchCaseById: ActionCreator<*, *>,
  fetchVoteRecordByCaseId: ActionCreator<*, *>,
};

type Props = OwnProps & ReduxProps;

export class CaseDetailContainer extends React.Component {
  props: Props;

  componentDidMount() {
    const { parliamentCase, voteRecord, match: { params: { caseId } } } = this.props;
    if (!parliamentCase) {
      this.props.fetchCaseById(caseId);
    }
    if (!voteRecord) {
      this.props.fetchVoteRecordByCaseId(caseId);
    }
  }
  render() {
    const { parliamentCase, voteRecord } = this.props;
    if (!parliamentCase) return <CircularProgress />;
    return <CaseDetail parliamentCase={parliamentCase} voteRecord={voteRecord} />;
  }
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {
    error: state.cases.error,
    hasLoadedCases: state.cases.loading,
    parliamentCase: caseById(state, ownProps.match.params.caseId),
    voteRecord: voteRecordByCaseId(state, ownProps.match.params.caseId),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchCaseById, fetchVoteRecordByCaseId }, dispatch);

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(CaseDetailContainer);
