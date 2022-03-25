/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequest, deleteUserRequest } from '../../store/modules/user/actions';
import { Container, PageTitle } from './styles';

function Establishment() {
  return (
    <Container>
      <PageTitle>
        <p>Estabelecimentos</p>
      </PageTitle>
      <Table responsive>
        <thead>
          <tr>
            <th>Razão social</th>
            <th>Nome fantasia</th>
            <th>CNPJ</th>
            <th>Data de cadastro</th>
            <th>Status</th>
            <th>Valor arrecadado por mês</th>
            <th>Valor arrecadado (previsão próximo mês)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teste LTDA</td>
            <td>teste 1</td>
            <td>93.619.944/0001-22</td>
            <td>10/02/2021</td>
            <td>Ativo</td>
            <td>
              <a>Visualizar</a>
            </td>
            <td>R$ 1.500</td>
          </tr>
          <tr>
            <td>Teste LTDA</td>
            <td>teste 1</td>
            <td>93.619.944/0001-22</td>
            <td>10/02/2021</td>
            <td>Ativo</td>
            <td>
              <a>Visualizar</a>
            </td>
            <td>R$ 1.500</td>
          </tr>
          <tr>
            <td>Teste LTDA</td>
            <td>teste 1</td>
            <td>93.619.944/0001-22</td>
            <td>10/02/2021</td>
            <td>Ativo</td>
            <td>
              <a>Visualizar</a>
            </td>
            <td>R$ 1.500</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Establishment;
