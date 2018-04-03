/**
 * We find the vote record for the case id that has the highest althingi_id (newest)
 * @param {Object} state 
 * @param {Integer} id 
 */
export const voteRecordByCaseId = (state, id) =>
  state.voteRecords.data &&
  state.voteRecords.data.reduce(
    (currentVoteRecord, voteRecord) =>
      voteRecord.case === parseInt(id, 10) &&
        voteRecord.althingi_id > currentVoteRecord.althingi_id
        ? voteRecord
        : currentVoteRecord
  );
