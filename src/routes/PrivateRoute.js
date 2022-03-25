/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useSelector(state => state.auth);

  return (
    <Route {...rest} render={props => (loggedIn ? <Component {...props} /> : <Redirect from="/" to="/login" />)} />
  );
};

/*   if (!localStorage.getItem('user')) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Route {...rest} render={props => <Component {...props} />} />
    </Layout>
  );
 */
/*  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />; */
