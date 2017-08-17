/* @flow */

const TYPE_KEY = 'token-type';
const TOKEN_KEY = 'veritus-token';

export const saveToken = (type: string, token: string) => {
  localStorage.setItem(TYPE_KEY, type);
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return {
    type: localStorage.getItem(TYPE_KEY),
    token: localStorage.getItem(TOKEN_KEY),
  };
};

export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);

export const isAuthenticated = () => Boolean(localStorage.getItem(TOKEN_KEY));
