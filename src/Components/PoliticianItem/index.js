/* @flow */
import React from 'react';
import { ListItem } from 'material-ui/List';

export type Props = {
  id: number,
  name: string,
  progress: number,
};

const PoliticianItem = (props: Props) => {
  const { name, progress } = props;
  return <ListItem primaryText={name} secondaryText={`${progress}%`} />;
};

export default PoliticianItem;
