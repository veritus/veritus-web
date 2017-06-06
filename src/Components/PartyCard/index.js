/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { PartyType } from '../../types';
import PartyPromisesContainer from '../../Containers/PartyPromises';

export type Props = {
  party: PartyType,
};

const PartyCard = (props: Props) => {
  const { party } = props;
  return (
    <Card key={party.id}>
      <CardHeader title={party.name} actAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true}>
        <a href={party.website} rel="noopener noreferrer" target="_blank">
          {party.website}
        </a>
        <h2>Promises</h2>
        <PartyPromisesContainer partyId={party.id} />
      </CardText>
    </Card>
  );
};

export default PartyCard;
