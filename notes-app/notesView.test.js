/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');

 describe('Notes view', () => {
  it('displays two notes', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  const model = new NotesModel();
  const view = new NotesView(model);

  model.addNotes('A first note');
  model.addNotes('Another one')

  view.displayNotes();
  expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    const view = new NotesView(model);
    view.displayNotes();

    const input = document.querySelector('#add-note-input');
    input.value = 'My new test note';

    const button = document.querySelector('#add-note-btn');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new test note');

  })

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes('one');
    model.addNotes('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  // it("displays the notes from the API", () => {
  //   const model = new NotesModel;
  //   const api = new NotesApi;
  //   const view = new NotesView(model, api);

  //   fetch.mockResponseOnce(
  //         JSON.stringify(["Example 1", "Example 2"])
  //       );

  //   view.displayNotesFromApi(() => {
  //     expect(document.querySelector(".note").length).toEqual(2);
  //     expect(document.querySelector(".note").textContent).toBe('Example 1');
  //   });
  //   expect(document.querySelector(".note")).toBeNull();
  //   expect(document.querySelectorAll(".note").length).toBe(0);
  //  });
  
 });