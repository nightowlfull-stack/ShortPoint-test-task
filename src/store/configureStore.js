import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware from '../sagas';
import reducer from '../reducers';

const store = configureStore({
  reducer,
  middleware: [ sagaMiddleware ],
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../reducers', () => {
    const newRootReducer = require('../reducers').default
    store.replaceReducer(newRootReducer)
  });
};

export default store;
