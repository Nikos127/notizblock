
let notesTitle = ['Ba', "Aufgaben", "Einkaufen"];
let notes = ['banana', 'apfel', 'kiwi'];
let trashNotesTitle = [];
let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";


    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notesTitle[indexNote]} >> ${notes[indexNote]} <button onclick="toTrashNote(${indexNote})">X</button></p>
</html>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotesTitle[indexTrashNote]} >> ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">X</button></p>
</html>`
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function toTrashNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    let trashNoteTitle = notesTitle.splice(indexNote, 1);
    trashNotesTitle.push(trashNoteTitle);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderTrashNotes();
}




//notizen archivieren

