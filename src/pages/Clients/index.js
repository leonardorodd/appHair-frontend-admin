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
import CreateClient from './CreateClient';
import { cnpjMask } from '../../utils/masks';

function Artists() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = () => {
    apiClient
      .get('/admin/client')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <PageTitle>
        <p>Clientes</p>
      </PageTitle>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Documento</th>
            <th>Tipo Documento</th>
            <th>Contatos</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Complemento</th>
            <th>Cep</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <th>{client.nome}</th>
              <td>{cnpjMask(client.cpf_cnpj)}</td>
              <td>{client.pessoa}</td>
              <td>
                {client.contatos.map((contact, index) => (
                  <div key={index}>
                    <p>Nome: {contact.nome}</p>
                    <p>{contact.telefone && `Telefone: ${contact.telefone}`}</p>
                    <p>{contact.email && `E-mail: ${contact.email}`}</p>
                  </div>
                ))}
              </td>
              <td>{client.endereco.estado}</td>
              <td>{client.endereco.cidade}</td>
              <td>{client.endereco.complemento}</td>
              <td>{client.endereco.cep}</td>
              <th>{`${client.ativo ? 'Ativo' : 'Inativo'}`}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Artists;
