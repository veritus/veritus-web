/* @flow */
import React from 'react';
import { List } from 'material-ui/List';
import type { CaseType } from '../../types';

export type Props = {
  cases: Array<CaseType>,
};

const CaseList = (props: Props) => {
  const { cases } = props;
  const caseList = [];

  return <List> {caseList} </List>;
};

export default CaseList;
