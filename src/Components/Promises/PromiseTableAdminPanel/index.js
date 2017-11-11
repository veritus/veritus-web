/* @flow */
import React from 'react';
import SubjectSelector from '../../Subjects/SubjectSelector';
import RaisedButton from 'material-ui/RaisedButton';
import type { SubjectId } from '../../../types';
import { createSubject } from '../../../utils/api';

const styles = {
  container: {
    display: 'flex',
  },
  select: {
    flexGrow: 1,
  },
  buttonContainer: {},
};

type Props = {
  linkSubjectsCallback: (subjectId: SubjectId) => void,
};

type State = {
  subject: ?string | SubjectId,
};

type ReactSelectValue = {
  value: ?string | number,
};

export class PromiseTableAdminPanel extends React.Component<void, Props, State> {
  props: Props;
  state = {
    subject: null,
  };

  updateSubject = (selectedValue: ?ReactSelectValue) => {
    const subject = selectedValue && selectedValue.value;

    this.setState({ subject: subject });
  };

  onLinkSubmit = async (subject: string | SubjectId) => {
    const { linkSubjectsCallback } = this.props;
    let subjectId = subject;
    if (typeof subjectId === 'string') {
      const res = await createSubject(subjectId);
      if (res.error) {
        throw new Error('failed creating subject');
      } else if (res.data) {
        subjectId = res.data.id;
      } else {
        throw new Error('super failed');
      }
    }

    linkSubjectsCallback(subjectId);
  };

  render() {
    const { subject } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.select}>
          <SubjectSelector styles={styles.select} onSelectSubject={this.updateSubject} />
        </div>
        <div style={styles.buttonContainer}>
          <RaisedButton
            type="submit"
            label="Add tags"
            onClick={() => {
              subject && this.onLinkSubmit(subject);
            }}
          />
        </div>
      </div>
    );
  }
}

export default PromiseTableAdminPanel;
