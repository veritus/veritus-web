/* @flow */

export const clearMessage = () => ({ type: 'FEEDBACK_CLEAR_MESSAGE' });

export const setMessage = (message: string) => ({
  type: 'FEEDBACK_SET_MESSAGE',
  message,
});
