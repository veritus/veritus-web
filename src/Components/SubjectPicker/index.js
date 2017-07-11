/* @flow */
import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import type { SubjectType } from '../../types';

export type Props = {
  subjects: Array<SubjectType>,
};

class SubjectPicker extends Component {
  props: Props;

  state = {
    values: [],
  };

  handleChange = (event: SyntheticEvent, index: number, values: Array<number>) =>
    this.setState({ values });

  menuItems(values: Array<number>) {
    return this.props.subjects.map((subject: SubjectType) =>
      <MenuItem
        key={subject.id}
        insetChildren={true}
        checked={values && values.indexOf(subject.id) > -1}
        value={subject.id}
        primaryText={subject.name}
      />
    );
  }

  render() {
    const { values } = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}

export default SubjectPicker;
