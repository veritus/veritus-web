/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import CaseDetail from '../CaseDetail';
import { getParliamentCaseById } from '../../../utils/api';
import type { MatchTypeCaseId } from '../../../types';
import type { Case } from '../../../Stores/Cases/types';

export type Props = {
  match: MatchTypeCaseId,
};

export type State = {
  parliamentCase: ?Case,
};

export class CaseDetailContainer extends React.Component<void, Props, State> {
  props: Props;
  state = {
    parliamentCase: null,
  };
  componentDidMount() {
    const { match: { params: { caseId } } } = this.props;
    getParliamentCaseById(caseId).then(resp => {
      this.setState({ parliamentCase: resp.data });
    });
  }
  render() {
    const { parliamentCase } = this.state;
    if (!parliamentCase) return <CircularProgress />;
    return <CaseDetail parliamentCase={parliamentCase} />;
  }
}
export default CaseDetailContainer;
