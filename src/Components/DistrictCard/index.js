/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import type { DistrictPoliticianType } from '../../types';
import PoliticianItem from '../PoliticianItem';
import { promiseCompletionPercentage } from '../../utils/promises';

export type Props = {
  name: string,
  politicians: Array<DistrictPoliticianType>,
};

const DistrictCard = (props: Props) => {
  const { name, politicians } = props;
  return (
    <Card>
      <CardHeader title={name} actAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true}>
        {politicians.map(politician =>
          <PoliticianItem
            key={politician.id}
            id={politician.id}
            name={politician.name}
            progress={promiseCompletionPercentage(politician.promises)}
          />
        )}
      </CardText>
    </Card>
  );
};

export default DistrictCard;
