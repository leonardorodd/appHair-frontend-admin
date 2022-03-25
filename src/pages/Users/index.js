/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequest, deleteUserRequest } from '../../store/modules/user/actions';
import { Container, PageTitle } from './styles';
import apiClient from '../../services/apiClient';

function Users() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    apiClient
      .get('/admin/users')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <PageTitle>
        <p>Gestão de usuários</p>
      </PageTitle>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modelo do celular</th>
            <th>Sistema</th>
            <th>Data (último acesso)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Fulano</th>
            <td>Iphone 11</td>
            <td>IOS 12</td>
            <td>12/11/2021</td>
          </tr>
          <tr>
            <th>Fulano</th>
            <td>S10</td>
            <td>Android</td>
            <td>12/11/2021</td>
          </tr>
          <tr>
            <th>Fulano</th>
            <td>Iphone 7</td>
            <td>Android</td>
            <td>12/11/2021</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Users;
