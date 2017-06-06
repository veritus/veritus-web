/* @flow */
import React from 'react';
import PromiseForm from '../../Components/PromiseForm';
import { createPromise, getPoliticans, getPoliticalParties } from '../../utils/api';
import type { PromiseFormType } from '../../utils/api';

const submit = (data: PromiseFormType) => {
  createPromise(
    data.name,
    data.shortDescription,
    data.longDescription,
    data.parliamentId
  ).then(resp => {
    alert(`Promise with ID:${resp.id} created`); // eslint-disable-line no-alert
  });
};

export class PromiseFormContainer extends React.Component {
  state = {
    politicians: [],
    parties: [],
  };

  componentDidMount() {
    getPoliticans().then(politicians => {
      this.setState({ politicians });
    });

    getPoliticalParties().then(parties => {
      this.setState({ parties });
    });
  }

  render() {
    return (
      <PromiseForm
        onSubmit={submit}
        politicians={this.state.politicians}
        parties={this.state.parties}
      />
    );
  }
}
export default PromiseFormContainer;
