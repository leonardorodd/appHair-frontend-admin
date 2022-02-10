/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequest, deleteUserRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';
import { Container } from './styles';

function HomePage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.user);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getAllRequest());
  }, [dispatch]);

  function handleDeleteUser(id) {
    dispatch(deleteUserRequest(id));
  }

  return (
    <Container>
      <h1>Olá, {user.email}!</h1>

      {/*  <h1>ddddd</h1>
      <h1>Hi {user.firstName}!</h1>
      <p>You&apos;re logged in with React!!</p>
      <h3>All registered users:</h3>
      {loading && <em>Loading users...</em>}
      {error && <span className="text-danger">ERROR: {error}</span>}
      {items && (
        <ul>
          {items.map(user => (
            <li key={user.id}>
              {user.firstName + ' ' + user.lastName}
              {user.deleting ? (
                <em> - Deleting...</em>
              ) : user.deleteError ? (
                <span className="text-danger"> - ERROR: {user.deleteError}</span>
              ) : (
                <span>
                  {' '}
                  - <a onClick={handleDeleteUser(user.id)}>Delete</a>
                </span>
              )}
            </li>
          ))}
        </ul>
      )} */}
    </Container>
  );
}

export default HomePage;
