/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';

import type { Case } from '../types';

export type Props = {
  parliament_case: Case,
};

const styles = {
  container: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

const CaseCard = (props: Props) => {
  const { parliament_case } = props;
  return (
    <Paper zDepth={1} rounded={false} style={styles.container}>
      <div>
        <h2>{parliament_case.name}</h2>
      </div>
      <div>
        <span>{parliament_case.case_type}</span>
      </div>
    </Paper>
  );
};

export default CaseCard;
