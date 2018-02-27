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
        console.log('getParliamentCases error > ', resp.error); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ cases: resp.data });
      }
    });
  }
  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
      },
      case: {
        margin: 10,
      },
    };
    return (
      <div style={styles.container}>
        {this.state.cases.map(parliament_case =>
          <div key={parliament_case.id} style={styles.case}>
            <CaseCard parliament_case={parliament_case} />
          </div>
        )}
      </div>
    );
  }
}
export default CaseContainer;
