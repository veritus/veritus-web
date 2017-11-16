/* @flow */
import React from 'react';
import { ListItem } from 'material-ui/List';
import type { PoliticianType } from '../../../types';

export type Props = {
  politician: PoliticianType,
};

const PoliticianItem = (props: Props) => {
  const { politician } = props;
  return (
    <div>
      <p>{politician.name}</p>
    </div>
  );
};

export default PoliticianItem;
