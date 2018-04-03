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
import InCompleteIcon from 'material-ui-icons/Close';
import CompleteIcon from 'material-ui-icons/Check';
import Chip from 'material-ui/Chip';
import { red500, green500, blue300 } from 'material-ui/colors';
import PromiseTableAdminPanel from '../PromiseTableAdminPanel';
import type {
  DecoratedPromise,
  PromiseId,
  SubjectId,
  DecoratedSubject,
} from '../../../types';
import { deleteSubjectPromise } from '../../../utils/api';

export type Props = {
  promises: Array<DecoratedPromise>,
  linkSubjectToPromises: (promiseIds: Array<PromiseId>, subjectId: SubjectId) => void,
  unlinkSubjectPromise: (subjectPromiseId: number) => void,
};

const getIcon = fulfilled =>
  fulfilled ? <CompleteIcon color={green500} /> : <InCompleteIcon color={red500} />;

export class PromiseTable extends React.Component {
  props: Props;

  state = {
    selectedPromises: [],
  };

  linkSubjectsCallback = (subjectId: SubjectId) => {
    const { selectedPromises } = this.state;
    const { linkSubjectToPromises } = this.props;
    if (selectedPromises.length === 0) {
      return;
    }

    // $FlowFixMe: promise.id is not undefined. Shhh flow
    const promiseIds = selectedPromises.map(promise => promise.id);
    if (!promiseIds) {
      return;
    }
    linkSubjectToPromises(promiseIds, subjectId);
  };

  onUnLinkSubject = (subjectId: SubjectId) => {
    deleteSubjectPromise(subjectId);
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

  renderSubjects = (subjects?: Array<DecoratedSubject>) => {
    if (!subjects) return null;
    const { unlinkSubjectPromise } = this.props;
    return subjects.map(subject =>
      <Chip
        key={subject.id}
        backgroundColor={blue300}
        onRequestDelete={() => unlinkSubjectPromise(subject.subjectPromiseId)}
      >
        {subject.name}
      </Chip>
    );
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
        <TableRowColumn>{this.renderSubjects(promise.subjects)}</TableRowColumn>
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
            <TableHeaderColumn>Subjects</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>{promiseRows}</TableBody>
      </Table>
    );
  }
}

export default PromiseTable;
