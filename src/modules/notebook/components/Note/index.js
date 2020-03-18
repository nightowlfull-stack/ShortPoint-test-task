import React from 'react';
import './note.css'
import pencilImage from '../../../../images/pencil.png'
import trashImage from '../../../../images/trash.png'

const Note = ({ note, editNote, deleteNote }) => {
  return (
    <div className="col-sm-4">
      <div className="img-thumbnail">
        <div className="mainblock">
          <div className={`${note.color} borderleft`}></div>
          <div className="mainheadingblock">
            <span className={`${note.color}-color`}>Note {note.id}</span>
            <ul>
              <li onClick={editNote}><img src={pencilImage} /></li>
              <li onClick={deleteNote}><img src={trashImage} /></li>
            </ul>
          </div>
          <p className="textBlock">{note.noteText}</p>
        </div>
        <div className="datefield">
          <span>{note.timeCreated}</span>
        </div>
      </div>
    </div >
  )
}

export default Note
