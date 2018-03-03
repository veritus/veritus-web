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
import PromiseTableAdminPanel from '../PromiseTableAdminPanel';
import type {
  DecoratedPromise,
  PromiseId,
  SubjectId,
  DecoratedSubject,
} from '../../../types';

export type Props = {
  promises: Array<DecoratedPromise>,
  linkSubjectToPromises: (promiseIds: Array<PromiseId>, subjectId: SubjectId) => void,
};

const getIcon = fulfilled =>
  fulfilled ? <CompleteIcon color={green500} /> : <InCompleteIcon color={red500} />;

export class PromiseTable extends React.Component {
  props: Props;

  state = {
    selectedPromises: [],
  };

  linkSubjectsCallback = (subjectId: SubjectId) => {
    const { linkSubjectToPromises } = this.props;
    const { selectedPromises } = this.state;

    const promiseIds = selectedPromises.map(promise => promise.id);
    linkSubjectToPromises(promiseIds, subjectId);
  };

  onRowSelect = (selection: 'all' | 'none' | Array<number>) => {
    const refine = selection;
    if (refine === 'all') {
      this.setState({
        selectedPromises: this.props.promises,
      });
    } else if (refine === 'none') {
      this.setState({
        selectedPromises: [],
      });
    } else if (Array.isArray(refine)) {
      const proms = this.props.promises.filter((p, idx) => refine.includes(idx));
      this.setState({ selectedPromises: proms });
    }
  };

  render() {
    const { promises } = this.props;
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
      <Table
        fixedHeader={true}
        multiSelectable={true}
        wrapperStyle={{ overflow: 'visible' }}
        onRowSelection={this.onRowSelect}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn colSpan="3">
              <PromiseTableAdminPanel linkSubjectsCallback={this.linkSubjectsCallback} />
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Politician id</TableHeaderColumn>
            <TableHeaderColumn>Short description</TableHeaderColumn>
            <TableHeaderColumn>Fulfilled</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>{promiseRows}</TableBody>
      </Table>
    );
  }
}

export default PromiseTable;
