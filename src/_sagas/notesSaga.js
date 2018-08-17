import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { notesConstants } from '../_constants';
import { notesService } from '../_services';

function* fetchNotes() {
  const success = payload => ({ type: notesConstants.FETCH_NOTES_SUCCESS, payload });
  const failure = payload => ({ type: notesConstants.FETCH_NOTES_FAILURE, payload });

  try {
    const notes = yield call(notesService.fetchNotes);
    yield put(success(notes));
  } catch (e) {
    yield put(failure(e));
  }
}

function* notesSaga() {
  yield takeEvery(notesConstants.FETCH_NOTES_REQUEST, fetchNotes);
}

export default notesSaga;
