/* @flow */

export const clearError = () => ({ type: 'COMMON_CLEAR_ERROR' });

export const setError = (error: string) => ({ type: 'COMMON_SET_ERROR', error });
