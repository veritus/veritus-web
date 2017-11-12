/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
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
    if (!this.state.case.id) {
      return <CircularProgress />;
    }
    return (
      <div>
        {this.state.case.name}
      </div>
    );
  }
}
export default CaseDetailContainer;
