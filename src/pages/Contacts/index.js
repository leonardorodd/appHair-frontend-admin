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

function Artists() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    apiClient
      .get('/admin/spa')
      .then(response => {
        console.log(response.data);
        setContacts(response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <PageTitle>
        <p>Contatos</p>
      </PageTitle>
      <Table responsive>
        <thead>
          <tr>
            <th>Data de criação</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <th>{new Date(contact.created_at).toLocaleDateString('pt-br')}</th>
              <td>{contact.nome}</td> <td>{contact.email}</td>
              <td>{contact.estado}</td>
              <td>{contact.cidade}</td>
              <td>{contact.telefone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Artists;
