// import a controller
const NotesController = require('../controllers/notes_controller');
const SourcesController = require('../controllers/sources_controller');
module.exports = (app) => {

  // ------------------------
  // Note-Specific Routes   |
  // ------------------------
  /*
  // Create
  app.post('/notes/', NotesController.createNote);

  // Read
  app.get('/notes/', NotesController.getAllNotes);
  app.get('/notes/:noteID', NotesController.getNoteById);

  // Update
  app.put('/notes/:noteID', NotesController.updateNoteById);

  // Delete
  app.delete('/notes/:noteID', NotesController.deleteNoteById);
  */

  // ------------------------
  // Source Routes          |
  // ------------------------

  app.post('/sources/', SourcesController.createSource);

  // create a note on that source
  app.post('/sources/:sourceID/notes/', SourcesController.addNoteToSource);

  // get all sources
  app.get('/sources/', SourcesController.getSources);

  // get a single source by id
  app.get('/sources/:sourceID/', SourcesController.getSource);

  // read all notes related to a source
  app.get('sources/:sourceID/notes/', SourcesController.getNotesFromSource);

  // get a single note related to the source by it's id
  app.get('sources/:sourceID/notes/:noteID', SourcesController.getNoteFromSource)

  // delete the source itself
  //app.delete('/sources/:sourceID', SourcesController.deleteSource)

  // delete all notes related to a source
  //app.delete('/sources/:sourceID/notes/', SourcesController.deleteNotesFromSource);

  // delete a single note related to a source by it's id
  //app.delete('/sources/:sourceID/notes/:noteID', SourcesController.deleteNoteFromSource);

}
