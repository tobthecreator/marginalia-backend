const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const TopicSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  title: String,
},
{
  timestamps: true
});

const Topic = mongoose.model('topic', TopicSchema);

module.exports = Topic;
