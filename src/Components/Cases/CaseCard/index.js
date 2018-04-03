/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent } from 'material-ui/Card';

import type { Case } from '../../../Stores/Cases/types';
import styles from './styles';

export type Props = {
  parliament_case: Case,
};

const CaseCard = (props: Props) => {
  const { parliament_case } = props;
  return (
    <Link to={`/cases/${parliament_case.id}`} style={styles.link}>
      <Card style={styles.container}>
        <CardContent>
          <div>
            <h2>{parliament_case.name}</h2>
          </div>
          <div>
            <span>{parliament_case.case_type}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseCard;
