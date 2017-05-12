/* @flow */
import React from 'react';
import { List } from 'material-ui/List';
import type { CaseType } from '../../types';

export type Props = {
  cases: Array<CaseType>,
};

const CaseList = (props: Props) => {
  const { cases } = props;
  const caseList = cases.map(one_case => <div key={one_case.id}><p>{one_case.name}</p></div> );

  return <List> {caseList} </List>;
};

export default CaseList;
