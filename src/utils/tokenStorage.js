/* @flow */

const TOKEN_KEY = 'veritus-token';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);

export const isAuthenticated = () => Boolean(localStorage.getItem(TOKEN_KEY));
