import React from 'react';
import routes from '../routes';
import { startSaga } from '../sagas';

const Home = () => (
  <React.Fragment>
      {routes}
  </React.Fragment>
)

const WrappedComponent = Home;

export default () => {
  startSaga();
  return <WrappedComponent />
}