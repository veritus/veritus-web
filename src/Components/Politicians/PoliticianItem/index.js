/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';

import type { PoliticianType } from '../../../types';
import type { District } from '../../Districts/types';
import type { Party } from '../../Parties/types';

export type Props = {
  politician: PoliticianType,
  district: District,
  party: Party,
};

const PoliticianItem = (props: Props) => {
  const { politician, district, party } = props;
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      margin: 'auto',
    },
    basicInformationContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
    },
  };
  return (
    <div style={styles.container}>
      <Paper style={styles.basicInformationContainer} zDepth={5}>
        <div>
          <h2>{`${politician.name} (${politician.initials})`}</h2>
        </div>
        <div>
          <p>{`${district.name} - ${politician.districtNumber}`}</p>
        </div>
        <div>
          <p>{party.name}</p>
        </div>
      </Paper>
    </div>
  );
};

export default PoliticianItem;
