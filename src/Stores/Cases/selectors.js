export const caseById = (state, id) =>
  state.cases.data && state.cases.data.find(c => c.id === parseInt(id, 10));
