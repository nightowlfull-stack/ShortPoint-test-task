import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

let nextNoteId = 0;

const configSlice = createSlice({
  name: 'notes',
  initialState: {
    error: null,
    loading: false,
    list: [],
    editNote: '',
  },
  reducers: {
    addNote: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(note) {
        return { 
          payload: { 
            ...note, 
            id: nextNoteId++, 
            timeCreated: moment().format('LLL'), 
          } 
        }
      }
    },
    startNoteEditing(state, action) {
      state.editNote = action.payload;
    },
    cancelNoteEditing(state) {
      state.editNote = '';
    },
    editNote(state, action) {
      const editedNote = action.payload;
      const indexOfNote = state.list.findIndex(note => note.id === editedNote.id);
      state.list.splice(indexOfNote, 1, editedNote);
      state.editNote = '';
    },
    deleteNote(state, action) {
      const noteToBeDeleted = action.payload;
      const indexOfNote = state.list.findIndex(note => note.id === noteToBeDeleted);
      state.list.splice(indexOfNote, 1);
    }
  }
})

const { actions, reducer } = configSlice;

export const { 
  addNote,
  startNoteEditing, 
  cancelNoteEditing, 
  editNote, 
  deleteNote, 
} = actions;

export default reducer;
