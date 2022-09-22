class NotesModel{
  constructor() {
    this.notes = []
  }

  getNotes() {
    return this.notes
  }
  addNotes(note) {
      this.notes.push(note);
    }
  reset() {
  this.notes = []
  }

  setNotes(apiNotes) {
    this.notes = apiNotes;
  }
  
}

module.exports = NotesModel;