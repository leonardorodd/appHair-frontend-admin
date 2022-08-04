/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import Profile from '../pages/Profile';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Establishment from '../pages/Establishment';
import Artists from '../pages/Artists';
import Users from '../pages/Users';
import Contacts from '../pages/Contacts';
import Clients from '../pages/Clients';
import SocialLogin from '../pages/SocialLogin';
import { history } from '../services/history';
import MessageContainer from '../components/MessageContainer';
import Layout from '../components/Layout';

function Routes() {
  /*   const dispatch = useDispatch(); */
  const alert = useSelector(state => state.alert);
  const { loggedIn } = useSelector(state => state.auth);
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
      {console.log('logado: ', loggedIn)}
      {!loggedIn ? (
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/sociallogin" component={SocialLogin} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Switch>
          <Layout>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute path="/establishment" component={Establishment} />
            <PrivateRoute path="/artists" component={Artists} />
            <PrivateRoute path="/usersmanagement" component={Users} />
            <PrivateRoute path="/leadsmanagement" component={Contacts} />
            <PrivateRoute path="/clientsmanagement" component={Clients} />
            <Redirect from="*" to="/" />
          </Layout>
        </Switch>
      )}
    </>
  );
}

export default Routes;
