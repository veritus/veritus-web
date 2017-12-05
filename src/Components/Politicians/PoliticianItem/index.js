/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';

import type { PoliticianType } from '../../../types';
import type { District } from '../../Districts/types';

export type Props = {
  politician: PoliticianType,
  district: District,
};

const PoliticianItem = (props: Props) => {
  const { politician, district } = props;
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    basicInformationContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
  return (
    <div style={styles.container}>
      <Paper style={styles.basicInformationContainer} zDepth={5}>
        <div>
          <h2>{politician.name}</h2>
        </div>
        <div>
          <p>{district.name}</p>
        </div>
      </Paper>
    </div>
  );
};

export default PoliticianItem;
