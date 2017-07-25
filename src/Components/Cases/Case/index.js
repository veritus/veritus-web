/* @flow */
import React from 'react';
import CaseCard from '../../Components/CaseCard';
import { getParliamentCases } from '../../utils/api';

export class CaseContainer extends React.Component {
  state = {
    cases: [],
  };
  componentDidMount() {
    getParliamentCases().then(cases => {
      this.setState({ cases });
    });
  }
  render() {
    return (
      <div>
        {this.state.cases.map(parliament_case =>
          <CaseCard key={parliament_case.id} parliament_case={parliament_case} />
        )}
      </div>
    );
  }
}
export default CaseContainer;
