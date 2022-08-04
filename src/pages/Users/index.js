/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequest, deleteUserRequest } from '../../store/modules/user/actions';
import { Container, PageTitle } from './styles';
import { FaSearch } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import apiClient from '../../services/apiClient';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import Switch from 'react-switch';

function Users() {
  const [usersList, setUsersList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('sss');

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const getUsers = () => {
    apiClient
      .get('/admin/user')
      .then(response => {
        setUsersList(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    apiClient
      .get(`/admin/user/10/logs/access`)
      .then(response => {
        /*         setUserLog(result.data[0]);
         */ console.log('aqui: ', response.data);
      })
      .catch(error => console.log(error));
  }, []);

  /*   const enableUser = id => {
    apiClient
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getUsers();
      })
      .catch(error => console.log(error));
  };

  const disableUser = id => {
    apiClient
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getUsers();
      })
      .catch(error => console.log(error));
  }; */

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <PageTitle>
        <p>Gestão de usuários</p>
        <div>
          <div>
            <FaSearch />
            <input placeholder="Data, descrição ou credor" onChange={event => setSearchTerm(event.target.value)} />
          </div>
          <CreateUser updateUsersList={getUsers} />
        </div>
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
          {
            /* searchTerm !== null && searchTerm !== ''
            ? usersList
                .filter(user => {
                  return Object.values(user).some(value =>
                    value.toLocaleUpperCase().startsWith(searchTerm.toLocaleUpperCase()),
                  );
                })
                .map((user, index) => (
                  <tr key={index}>
                    <th>{user.nome}</th>
                    <td>{user.email}</td>
                    <td>{user.ativo ? 'Ativo' : 'Inativo'}</td>
                    <td>
                      <EditUser user={user} updateUsersList={getUsers} />{' '}
                    </td>
                  </tr>
                ))
            :  */
            usersList.map((user, index) => (
              <tr key={index}>
                <th>{user.nome}</th>
                <td>{user.email}</td>
                <td>{user.ativo ? 'Ativo' : 'Inativo'}</td>
                <td>
                  <EditUser user={user} updateUsersList={getUsers} />{' '}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      {console.log(
        usersList.filter(user => {
          return Object.values(user).some(value =>
            value.toLocaleUpperCase().startsWith(searchTerm.toLocaleUpperCase()),
          );
        }),
      )}
    </Container>
  );
}

export default Users;
