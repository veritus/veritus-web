/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import CaseDetail from '../CaseDetail';
import { getParliamentCaseById } from '../../../utils/api';
import type { MatchTypeCaseId } from '../../../types';
import type { Case } from '../types';

export type Props = {
  match: MatchTypeCaseId,
};

export type State = {
  case: ?Case,
};

export class CaseDetailContainer extends React.Component<void, Props, State> {
  props: Props;
  state = {
    case: null,
  };
  componentDidMount() {
    const { match: { params: { caseId } } } = this.props;
    getParliamentCaseById(caseId).then(resp => {
      this.setState({ case: resp.data });
    });
  }
  render() {
    if (!this.state.case) return <CircularProgress />;
    return <CaseDetail case={this.state.case} />;
  }
}
export default CaseDetailContainer;
