const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  title: String,
  content: String,
  timestamps: true,
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
