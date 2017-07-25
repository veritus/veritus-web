/* @flow */
import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import InCompleteIcon from 'material-ui/svg-icons/navigation/close';
import CompleteIcon from 'material-ui/svg-icons/navigation/check';
import { red500, green500 } from 'material-ui/styles/colors';
import type { PromiseType } from '../../types';

export type Props = {
  promises: Array<PromiseType>,
};

const getIcon = fulfilled =>
  fulfilled ? <CompleteIcon color={green500} /> : <InCompleteIcon color={red500} />;

const PromiseTable = (props: Props) => {
  const { promises } = props;
  if (!promises) {
    return null;
  }

  const promiseRows = promises.map(promise =>
    <TableRow key={promise.id}>
      <TableRowColumn>{promise.name}</TableRowColumn>
      <TableRowColumn>{promise.politician}</TableRowColumn>
      <TableRowColumn>{promise.small_description}</TableRowColumn>
      <TableRowColumn>{getIcon(promise.fulfilled)}</TableRowColumn>
    </TableRow>
  );

  return (
    <Table fixedHeader={true} multiSelectable={true}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn colSpan="3">
            Here be buttons
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Politician id</TableHeaderColumn>
          <TableHeaderColumn>Short description</TableHeaderColumn>
          <TableHeaderColumn>Fulfilled</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {promiseRows}lel
      </TableBody>
    </Table>
  );
};

export default PromiseTable;
