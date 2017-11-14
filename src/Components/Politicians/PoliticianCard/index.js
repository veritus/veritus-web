/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

export type Props = {
  name: string,
  party: string,
  progress: number,
};

const PoliticianCard = (props: Props) => {
  const { name, party, progress } = props;
  const cardStyle = {};
  return (
    <Card style={cardStyle}>
      <CardHeader title={name} subtitle={party} avatar="http://lorempixel.com/200/200/">
        {progress}%
        <LinearProgress mode="determinate" value={progress} />
      </CardHeader>
    </Card>
  );
};

export default PoliticianCard;
