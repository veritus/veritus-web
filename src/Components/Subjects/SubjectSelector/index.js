/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Formsy from 'formsy-react';
import { fetchSubjects } from '../../../Stores/Subjects/actions';
import { subjectsLoaded } from '../../../Stores/Subjects/selectors';
import Select from '../../Utils/Select';
import type { Dispatch, State, Subject } from '../../../types';

type OwnProps = {
  onSelectSubject: ({ value: ?string | number }) => void,
};

type ReduxProps = {
  subjects: ?Array<Subject>,
  hasLoadedSubjects: boolean,
  error: ?string,
  fetchSubjects: () => void,
};

type Props = OwnProps & ReduxProps;

export class SubjectSelector extends React.Component {
  props: Props;

  componentDidMount() {
    const { hasLoadedSubjects } = this.props;
    if (!hasLoadedSubjects) {
      this.props.fetchSubjects();
    }
  }

  render() {
    const { subjects, onSelectSubject } = this.props;
    const subjectOptions = subjects
      ? subjects.map(subject => ({
          label: subject.name,
          value: subject.id,
        }))
      : [];
    return (
      <Formsy.Form>
        <Select
          allowCreate
          multiple
          isLoading={!subjects}
          name="subject"
          options={subjectOptions}
          onChange={onSelectSubject}
          openOnFocus
          onBlurResetsInput={false}
          placeholder="Select subject or add a new one by typing..."
        />
      </Formsy.Form>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.subjects.error,
    hasLoadedSubjects: subjectsLoaded(state),
    subjects: state.subjects.subjects,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchSubjects: () => {
      dispatch(fetchSubjects());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(SubjectSelector);
