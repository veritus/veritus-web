/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import type { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import CaseDetail from '../CaseDetail';
import { fetchCaseById } from '../../../Stores/Cases/actions';
import type { MatchTypeCaseId } from '../../../types';
import type { Case } from '../../../Stores/Cases/types';
import type { Dispatch, State } from '../../../types';
import { caseById } from '../../../Stores/Cases/selectors';

export type OwnProps = {
  match: MatchTypeCaseId,
};

type ReduxProps = {
  parliamentCase: ?Case,
  hasLoadedCases: boolean,
  error: ?string,
  fetchCaseById: ActionCreator<*, *>,
};

type Props = OwnProps & ReduxProps;

export class CaseDetailContainer extends React.Component {
  props: Props;

  componentDidMount() {
    const { parliamentCase, match: { params: { caseId } } } = this.props;
    if (!parliamentCase) {
      this.props.fetchCaseById(caseId);
    }
  }
  render() {
    const { parliamentCase } = this.props;
    if (!parliamentCase) return <CircularProgress />;
    return <CaseDetail parliamentCase={parliamentCase} />;
  }
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {
    error: state.cases.error,
    hasLoadedCases: state.cases.loading,
    parliamentCase: caseById(state, ownProps.match.params.caseId),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchCaseById }, dispatch);

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(CaseDetailContainer);
