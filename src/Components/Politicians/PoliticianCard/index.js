/* @flow */
import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

export type Props = {
  name: string,
  party: string,
};

const PoliticianCard = (props: Props) => {
  const { name } = props;
  const cardStyle = { flex: '1 1 0', margin: '1%' };
  return (
    <Card style={cardStyle}>
      <CardHeader title={name} avatar="http://lorempixel.com/200/200/" />
    </Card>
  );
};

export default PoliticianCard;
