export const STATUS_TO_DESCRIPTION = {
  Unknown: 'Woops, we are not sure what is happening with this case',
  'In progress': 'Dont worry, this case is currently being worked on',
  Rejected: 'This case was rejected!',
  Answered: 'This request has been answered',
  'Has not been answered': 'This request has not been answered',
  Withdrawn: 'This case was withdrawn',
  Passed: 'This case has been passed.',
};

export const rejected = 'rgb(245,14,30)';
export const unknown = 'rgb(27,79,251)';
export const completed = 'rgb(75,181,67)';
export const withdrawn = 'gray';
export const inProgress = 'rgb(255, 204, 0)';

export const STATUS_TO_BACKGROUND_COLOR = {
  Unknown: unknown,
  'In progress': inProgress,
  Rejected: rejected,
  Answered: completed,
  'Has not been answered': inProgress,
  Withdrawn: withdrawn,
  Passed: completed,
};
