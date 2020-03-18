import React from 'react';
import './notelist.css'
import Note from '../Note'

const NoteList = ({ notes, startNoteEditing, deleteNote }) => {
  return (
    <div class="card-block">
      <div class="row">
        {notes
          .map(note => (
            <Note
              key={note.id}
              note={note}
              editNote={() => startNoteEditing(note.id)}
              deleteNote={() => deleteNote([note.id])}
            />
          ))}
      </div>
    </div>
  );
}

export default NoteList;
