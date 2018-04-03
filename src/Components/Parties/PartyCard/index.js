/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import type { Party } from '../types';

const styles = {
  container: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: { textDecoration: 'none' },
};

type Props = {
  party: Party,
};

const PartyCard = (props: Props) => {
  const { party } = props;
  return (
    <Link to={`/parties/${party.id}`} style={styles.link}>
      <Paper zDepth={1} rounded={false} style={styles.container}>
        <div>
          <h2>{party.name}</h2>
        </div>
      </Paper>
    </Link>
  );
};

export default PartyCard;
