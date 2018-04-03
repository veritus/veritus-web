/* @flow */
import React from 'react';
import ReactSelect, { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';
import classnames from 'classnames';

export type Props = {
  name?: string,
  options: Array<{
    value: string,
    label: string,
  }>,
  title?: string,
  getValue: () => string,
  setValue: (value: string) => void,
  showRequired: () => boolean,
  showError: () => boolean,
  getErrorMessage: () => string,
  onChange?: (value: string) => void,

  allowCreate?: boolean,
  isLoading?: boolean,
  multi?: boolean,
  placeholder?: string,
};

class Select extends React.Component {
  props: Props;
  changeValue = (value: string) => {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(value);
  };

  render() {
    const {
      name,
      showError,
      showRequired,
      getValue,
      getErrorMessage,
      title,
    } = this.props;

    const className = classnames({
      required: showRequired(),
      error: showError(),
      [`select-${name || ''}`]: name,
    });

    const errorMessage = getErrorMessage();
    const SelectComponent = this.props.allowCreate ? Creatable : ReactSelect;
    return (
      <span className={className}>
        <label htmlFor={name}>{title}</label>
        <SelectComponent
          {...this.props}
          name={name}
          onChange={this.changeValue}
          value={getValue()}
          resetValue={this.props.multi ? [] : undefined}
        />

        <span className="validation-error">{errorMessage}</span>
      </span>
    );
  }
}

export default Select;
