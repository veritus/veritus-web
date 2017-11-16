/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import LinearProgress from 'material-ui/LinearProgress';
import type { PoliticianType } from '../../../types';

export type Props = {
  politician: PoliticianType,
  progress: number,
};

const PoliticianCard = (props: Props) => {
  const { politician, progress } = props;
  const containerStyle = {
    flex: '0 1 20%',
    margin: '1%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    textDecoration: 'none',
  };
  if (!politician) return <div />;
  return (
    <Link style={containerStyle} to={`/politicians/${politician.id}`}>
      <Paper style={{ flex: '1 1 100%', display: 'flex', flexWrap: 'wrap' }}>
        <img
          src="http://lorempixel.com/200/200/"
          alt="Politician"
          style={{ flex: '1 1 100%' }}
        />
        <p style={{ flex: '1 1 100%', textAlign: 'center' }}>{politician.name}</p>
        <span style={{ marginLeft: `${progress}%` }}>
          {progress}%
        </span>
        <LinearProgress
          style={{ flex: '1 1 100%' }}
          mode="determinate"
          value={progress}
        />
      </Paper>
    </Link>
  );
};

export default PoliticianCard;
