const NotesModel = require("./notesModel");

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);

  });
  it('adds a new note to the list', () => {
    const model = new NotesModel();
    model.addNotes('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk'])
  })
  it('reset the list of notes', () => {
    const model = new NotesModel();
    model.addNotes('Buy milk');
    model.addNotes('Run');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })

})
