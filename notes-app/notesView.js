class NotesView {
  constructor(model, api) {
    this.model = model;
    this.body = document.querySelector('body');
    this.api = api;
    // this.data;

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      // this.addNewNote(newNote);
      //saving user input in the server:
      this.api.createNote(newNote, response => {
        console.log(response);
      });

      // this.displayNotes();
      //display it on the screen
      this.displayNotesFromApi();
    });

    // this.api.loadNotes(callback, data => {
    //   console.log(data)
    // })

    // this.data = data
    // this.displayNotesFromApi();
  }

  addNewNote(newNote) {
    this.model.addNotes(newNote);
    this.displayNotes();
  }


  displayNotes() {

    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
    // document.querySelector('#add-note-input').value = '';
    
    const notes = this.model.getNotes()

    notes.forEach(note => {
    const noteEl = document.createElement('div');
    noteEl.textContent = note;
    noteEl.className = 'note';
    // console.log(this.mainContainerEl);
    this.body.append(noteEl);
    })
  }

    displayNotesFromApi() {
      if (this.api != null){
      this.api.loadNotes(data => {
        this.model.setNotes(data)
        this.displayNotes()
        console.log(data);
      })
    }}
    //   const apiNotes = document.getElementById('add-note-input')
    //   apiNotes.innerText = this.data.notes;
    //   console.log(this.data.notes);
    // }



  //   this.api.loadNotes(this.addNewNote())
  //   this.model.setNotes(notes)
  //   this.displayNotes()
  
}

module.exports = NotesView;