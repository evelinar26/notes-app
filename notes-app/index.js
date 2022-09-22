const NotesApi = require("./notesApi");
const NotesModel = require("./notesModel");
const NotesView = require('./notesView');

const model = new NotesModel();

console.log(model.getNotes());

const api = new NotesApi();
const view = new NotesView(model, api);
view.displayNotes();


// api.loadNotes();

view.displayNotesFromApi();
// api.createNote('note1', response => {
//   console.log(response);
// })




