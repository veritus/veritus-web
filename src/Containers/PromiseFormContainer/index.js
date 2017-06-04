/* @flow */
import React from 'react';
import PromiseForm from '../../Components/PromiseForm';
import { createPromise } from '../../utils/api';
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

const PromiseFormContainer = () => <PromiseForm onSubmit={submit} />;

export default PromiseFormContainer;
