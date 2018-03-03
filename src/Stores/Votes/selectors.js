export const voteRecordByCaseId = (state, id) =>
  state.voteRecords.data &&
  state.voteRecords.data.find(vr => vr.case === parseInt(id, 10));
