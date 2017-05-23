/* @flow */
import React from 'react';
import CaseCard from '../../Components/CaseCard';

export class CaseContainer extends React.Component {
  state = {
    cases: [],
  };
  componentWillMount() {
    fetch('/api/v1/cases/', {
      accept: 'application/json',
    }).then(response => this.setState({ cases: response.json() }));
  }
  render() {
    return (
      <div>
        {cases.map(parliament_case => <CaseCard parliament_case={parliament_case} />)}
      </div>
    );
  }
}
export default CaseContainer;
