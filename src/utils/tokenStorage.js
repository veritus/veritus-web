/* @flow */

export const saveToken = (token: string) => {
  localStorage.setItem('veritus-token', token);
};

export const getToken = () => localStorage.getItem('veritus-token');

export const isAuthenticated = () => !!localStorage.getItem('veritus-token');
