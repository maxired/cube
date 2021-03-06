var configuration = module.exports = {
  options:{}, // will be updated by the server during the start
  defaults:{
    "events-db-metric": {
      capped: true,
      size: 1e7,
      autoIndexId: true
    },
    "events-db-event-indexes": [{key: {"d.id": 1}, params:{unique: true, sparse: true}}],
    "events-db-metric-indexes": [
      {key: {"i": 1, "_id.e": 1, "_id.l": 1, "_id.t": 1}},
      {key: {"i": 1, "_id.l": 1, "_id.t": 1}}
    ]
  }
}
