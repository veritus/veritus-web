/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import LinearProgress from 'material-ui/LinearProgress';
import type { PoliticianType } from '../../../types';
import * as styles from './styles';

export type Props = {
  politician: PoliticianType,
  style: *,
};

const PoliticianCard = (props: Props) => {
  const { politician, style } = props;
  if (!politician) return <div />;
  return (
    <Link style={styles.container} to={`/politicians/${politician.id}`}>
      <Paper style={{ ...styles.paper, ...style }}>
        <img src="http://lorempixel.com/200/200/" alt="Politician" style={styles.image} />
        <p style={styles.name}>{politician.name}</p>
        <span style={{ marginLeft: `${0}%` }}>
          {0}%
        </span>
        <LinearProgress style={styles.progress} mode="determinate" value={0} />
      </Paper>
    </Link>
  );
};

export default PoliticianCard;
