/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Establishment from '../pages/Establishment';
import Artists from '../pages/Artists';
import { history } from '../services/history';
import MessageContainer from '../components/MessageContainer';
import Layout from '../components/Layout';

function Routes() {
  /*   const dispatch = useDispatch(); */
  const alert = useSelector(state => state.alert);
  const { user } = useSelector(state => state.auth);
  /*   const dispatch = useDispatch();
   */
  /*  const location = useLocation();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch, location]); */

  /* useEffect(() => {
    history.listen((location, action) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);
 */
  return (
    <>
      {alert.message && <MessageContainer message={alert.message} type={alert.type} />}
      {!user ? (
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute path="/establishment" component={Establishment} />
            <PrivateRoute path="/artists" component={Artists} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      )}
    </>
  );
}

export default Routes;
