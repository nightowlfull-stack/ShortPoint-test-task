import React from 'react';
import routes from '../routes';
import { startSaga } from '../sagas';
import Toast from '../modules/notification/components/toast'
import {setClose} from '../modules/notification/reducers'
import { connect } from 'react-redux';

const Home = (props) => (
  <React.Fragment>
      {routes}
      <Toast { ...props.notifications} setClose={props.setClose}/>
  </React.Fragment>
)

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const matchDispatchToProps = {
  setClose,
};

const WrappedComponent = connect(mapStateToProps, matchDispatchToProps)(Home);

export default () => {
  startSaga();
  return <WrappedComponent />
}