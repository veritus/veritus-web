/* @flow */
import type { Action } from '../../types';

export type State = {
  +message: ?string,
};

const initialState = {
  message: null,
};

const feedbackReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FEEDBACK_CLEAR_MESSAGE':
      return { ...state, message: null };
    case 'FEEDBACK_SET_MESSAGE':
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default feedbackReducer;
