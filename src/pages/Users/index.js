/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequest, deleteUserRequest } from '../../store/modules/user/actions';
import { Container, PageTitle } from './styles';
import { MdDelete } from 'react-icons/md';
import apiClient from '../../services/apiClient';
import CreateUser from './CreateUser';

function Users() {
  const [usersList, setUsersList] = useState([]);

  const getUsers = () => {
    apiClient
      .get('/admin/users')
      .then(response => setUsersList(response.data))
      .catch(error => console.log(error));
  };

  const getUser = id => {
    apiClient
      .get('/admin/users')
      .then(response => setUsersList(response.data))
      .catch(error => console.log(error));
  };

  const deleteUser = id => {
    apiClient
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getUsers();
      })
      .catch(error => console.log(error));
  };

  const updateUser = id => {
    apiClient
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getUsers();
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <PageTitle>
        <p>Gestão de usuáriosaaaa</p>
        <CreateUser updateUsersList={usersList} />
      </PageTitle>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>email</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, index) => (
            <tr key={index}>
              <th>{user.nome}</th>
              <td>{user.email}</td>
              <td>{user.ativo ? 'Ativo' : 'Inativo'}</td>
              <td>
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {console.log(usersList)}
    </Container>
  );
}

export default Users;
