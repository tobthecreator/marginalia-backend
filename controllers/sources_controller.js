const Source = require('../models/SourceModel');
const Note = require('../models/NoteModel');

module.exports = {
    async createSource(req, res, next) {
      let sourceParams = req.body;

      let source = await Source.create(sourceParams);

      source.save();
      res.status(201).send(source);
    },
    async getSources(req, res, next) {
      let sources = await Source.find({});

      res.status(200).send(sources);
    },
    async getSource(req, res, next) {
      let { sourceID } = req.params;

      let source = await Source.findOne({ _id: sourceID });

      res.status(200).send(source);
    },
    async deleteSource(req, res, next) {
      let { sourceID } = req.params;

      let source = await Source.findOneAndDelete({ _id: sourceID });

      let source = await Source.findOne({ _id: sourceID });

      res.status(204).send(source);
    },

    // ------------------------
    // Note-Specific Routes   |
    // ------------------------
    async addNoteToSource(req, res, next) {
      let noteParams = req.body;

      let note = Note.create(noteParams);

      res.status(201).send(note);
    },


    async getNotesFromSource(req, res, next) {
      let { sourceID } = req.params;

      let notes = Note.find({ sourceID });

      res.status(200).send(notes);
    },

    async getNoteFromSource(req, res, next) {
      let { noteID } = req.params;

      let note = Note.findOne({ _id: noteID });

      res.status(200).send(note);
    }
}
