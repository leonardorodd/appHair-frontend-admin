/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { Container, CreateUserForm, CreateUserModal } from './styles';
import { FaPlus } from 'react-icons/fa';
import Input from '../../../components/UnformFields/Input';
import { useDispatch } from 'react-redux';
import apiClient from '../../../services/apiClient';
import { Scope } from '@unform/core';
import { successMessage /* errorMessage */ } from '../../../store/modules/alert/actions';

const CreateUser = ({ updateUsersList }) => {
  const [show, setShow] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  const handleCreateClientSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório!'),
        email: Yup.string().email('O e-mail precisa ser válido.').required('O email é obrigatório!'),
        password: Yup.string().required('A senha é obrigatória!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed

      apiClient
        .post('admin/user', {
          nome: data.name,
          email: data.email,
          senha: data.password,
        })
        .then(response => {
          console.log(response);
          updateUsersList();
          dispatch(successMessage('Usuário cadastrado com sucesso'));
          handleClose();
        })
        .catch(
          error =>
            console.log(
              'error: ',
              error.msg,
              /*  error.msg.entries.reduce((acc, element) => {
                return { ...acc, [element[0]]: element.quantity };
              }, {}), */
            ) /* dispatch(errorMessage(`Erro ao cadastrar o usuário - ${error.data.msg}`)) */,
        );
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path || ''] = error.message;
        });
        formRef?.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <button type="button" className="baseButtonStyle" onClick={handleShow}>
        <span>Adicionar</span>
        <FaPlus />
      </button>
      <CreateUserModal
        className="baseModalStyle"
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        backdrop="static"
      >
        <CreateUserModal.Header>
          <CreateUserModal.Title>
            <p>Cadastro de Cliente</p>
          </CreateUserModal.Title>
        </CreateUserModal.Header>
        <CreateUserModal.Body>
          <CreateUserForm id="form" onSubmit={handleCreateClientSubmit} ref={formRef}>
            <Input name="nome" label="Nome" />
            <Input name="cpf_cnpj" label="Documento" />
            <Scope path="endereco">
              <Input name="estado" label="Estado" />
              <Input name="cidade" label="Cidade" />
              <Input name="complemento" label="Complemento" />
              <Input name="cep" label="Cep" />
            </Scope>
            <label>Contatos</label>
            <Scope path="contatos">
              <Input name="nome" label="Nome" />
              <Input name="email" label="email" />
              <Input name="telefone" label="Telefone" />
            </Scope>
          </CreateUserForm>
        </CreateUserModal.Body>
        <CreateUserModal.Footer>
          <button type="button" className="secondaryButtonStyle" onClick={handleClose}>
            Cancelar
          </button>
          <button type="submit" className="baseButtonStyle" form="form">
            Salvar
          </button>
        </CreateUserModal.Footer>
      </CreateUserModal>
    </Container>
  );
};

export default CreateUser;
