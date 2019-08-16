const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SourceSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  topicID: String,
  name: String,
  link: String,
  timestamps: true,
});

const Source = mongoose.model('source', SourceSchema);

module.exports = Source;
