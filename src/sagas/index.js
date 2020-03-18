import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import noteSaga from '../modules/notebook/sagas/NoteSaga';

function* rootSaga() {
  yield all(
    [
      fork(noteSaga),
    ]
  );
};

const sagaMiddleware = createSagaMiddleware();

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default sagaMiddleware;
