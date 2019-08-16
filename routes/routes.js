// import a controller
const NotesController = require('../controllers/notes_controller');

module.exports = (app) => {
  app.get('/test', NotesController.test);
}
