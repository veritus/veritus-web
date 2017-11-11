/* @flow */
import React from 'react';
import CaseCard from '../CaseCard';
import { getParliamentCases } from '../../../utils/api';

export class CaseContainer extends React.Component {
  state = {
    cases: [],
  };
  componentDidMount() {
    getParliamentCases().then(resp => {
      if (resp.error) {
        console.log('getParliamentCases error > ', getParliamentCases); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ cases: resp.data });
      }
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
