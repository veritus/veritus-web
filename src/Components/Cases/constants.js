export const STATUS_TO_DESCRIPTION = {
  Unknown: 'Woops, we are not sure what is happening with this case',
  'In progress': 'Dont worry, this case is currently being worked on',
  Rejected: 'This case was rejected!',
  Answered: 'This request has been answered',
  'Has not been answered': 'This request has not been answered',
  Withdrawn: 'This case was withdrawn',
  Passed: 'Nice! This was passed!',
};

export const red = 'rgb(245,14,30)';
export const blue = 'rgb(27,79,251)';
export const green = 'rgb(75,181,67)';
export const gray = 'gray';
export const yellow = 'rgb(255, 204, 0)';

export const STATUS_TO_BACKGROUND_COLOR = {
  Unknown: blue,
  'In progress': yellow,
  Rejected: red,
  Answered: green,
  'Has not been answered': yellow,
  Withdrawn: gray,
  Passed: green,
};
