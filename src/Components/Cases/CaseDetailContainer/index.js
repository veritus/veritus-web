/* @flow */
import React from 'react';
import CaseDetail from '../CaseDetail';
import { getParliamentCaseById } from '../../../utils/api';
import type { MatchTypeCaseId } from '../../../types';

export type Props = {
  match: MatchTypeCaseId,
};

export class CaseDetailContainer extends React.Component {
  props: Props;
  state = {
    case: {},
  };
  componentDidMount() {
    const { match: { params: { caseId } } } = this.props;
    getParliamentCaseById(caseId).then(resp => {
      this.setState({ case: resp });
    });
  }
  render() {
    return <CaseDetail case={this.state.case} />;
  }
}
export default CaseDetailContainer;
