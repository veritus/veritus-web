/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import LinearProgress from 'material-ui/LinearProgress';
import type { PoliticianType } from '../../../types';
import * as styles from './styles';

export type Props = {
  politician: PoliticianType,
  progress: number,
};

const PoliticianCard = (props: Props) => {
  const { politician, progress } = props;

  if (!politician) return <div />;
  return (
    <Link style={styles.container} to={`/politicians/${politician.id}`}>
      <Paper style={{ flex: '1 1 100%', display: 'flex', flexWrap: 'wrap' }}>
        <img
          src="http://lorempixel.com/200/200/"
          alt="Politician"
          style={styles.flexItem}
        />
        <p style={styles.name}>{politician.name}</p>
        <span style={{ marginLeft: `${progress}%` }}>
          {progress}%
        </span>
        <LinearProgress style={styles.flexItem} mode="determinate" value={progress} />
      </Paper>
    </Link>
  );
};

export default PoliticianCard;
