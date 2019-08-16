const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  sourceID: String,
  topicID: String,
  content: String,
  timestamps: true,
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;
