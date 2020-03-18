import React from 'react';
import './note.css'
import pencilImage from '../../../../images/pencil.png'
import trashImage from '../../../../images/trash.png'

const Note = ({ note, editNote, deleteNote }) => {
  return (
    <div class="col-sm-4">
      <div class="img-thumbnail">
        <div class="mainblock">
          <div class={`${note.color} borderleft`}></div>
          <div class="mainheadingblock">
            <span class={`${note.color}-color`}>Note {note.id}</span>
            <ul>
              <li onClick={editNote}><img src={pencilImage} /></li>
              <li onClick={deleteNote}><img src={trashImage} /></li>
            </ul>
          </div>
          <p class="textBlock">{note.noteText}</p>
        </div>
        <div class="datefield">
          <span>{note.timeCreated}</span>
        </div>
      </div>
    </div >
  )
}

export default Note
