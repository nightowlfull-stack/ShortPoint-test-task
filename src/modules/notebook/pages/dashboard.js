import React from 'react';
import NoteForm from '../components/NoteForm'
import NoteList from '../components/NoteList'
import { addNote, cancelNoteEditing, startNoteEditing, editNote, deleteNote } from '../reducers/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({
  notes,
  addNote,
  cancelNoteEditing,
  startNoteEditing,
  editNote,
  deleteNote,
  noteToBeEdited,
}) => {
  const onSubmit = (note) => {
    if (noteToBeEdited) {
      editNote(note);
    } else {
      addNote(note);
    }
  }

  return (
    <React.Fragment>
      <NoteForm
        onSubmit={onSubmit}
        noteToBeEdited={noteToBeEdited}
        cancelNoteEditing={cancelNoteEditing}
      />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        startNoteEditing={startNoteEditing}
      />
    </React.Fragment>
  )
}

const mapDispatchToProps = { addNote, cancelNoteEditing, startNoteEditing, editNote, deleteNote };

const mapStateToProps = (state) => {
  return {
    notes: state.notes.list,
    noteToBeEdited: state.notes.list.find(note => note.id === state.notes.editNote),
  }
};

Home.propTypes = {
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  startNoteEditing: PropTypes.func.isRequired,
  cancelNoteEditing: PropTypes.func.isRequired,
  noteToBeEdited: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
