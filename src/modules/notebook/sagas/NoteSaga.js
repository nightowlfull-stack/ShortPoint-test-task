import { put, takeEvery } from 'redux-saga/effects';
import { addNote, editNote, deleteNote } from '../reducers';
import { setOpen } from '../../notification/reducers';

function* addNoteSaga() {
  yield put(setOpen({ message: 'Note Successfully Added!', isSuccess: true }));
}

function* editNoteSaga() {
  yield put(setOpen({ message: 'Note Successfully Edited!', isSuccess: true }));
}

function* deleteNoteSaga() {
  yield put(setOpen({ message: 'Notes Successfully Deleted!', isSuccess: true }));
}

function* notebookSaga() {
  yield takeEvery(addNote.type, addNoteSaga);
  yield takeEvery(editNote.type, editNoteSaga);
  yield takeEvery(deleteNote.type, deleteNoteSaga);
}

export default notebookSaga;
