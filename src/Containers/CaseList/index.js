/* @flow */
import React from 'react';
import CaseCard from '../../Components/CaseCard';
export class Case extends React.Component {
  render() {
    const cases = [
      {
        id: 1,
        name: 'Case1',
      },
      {
        id: 2,
        name: 'Case2',
      },
      {
        id: 3,
        name: 'Case3',
      },
    ];
    return (
      <div>
        {cases.map(parliament_case => <CaseCard parliament_case={parliament_case} />)}
      </div>
    );
  }
}
export default Case;
