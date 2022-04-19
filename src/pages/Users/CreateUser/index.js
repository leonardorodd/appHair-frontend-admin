/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { Container, CreateUserForm, CreateUserModal } from './styles';
import { FaPlus } from 'react-icons/fa';
import Input from '../../../components/UnformFields/Input';
import apiClient from '../../../services/apiClient';

const CreateUser = ({ updateUsersList }) => {
  const [show, setShow] = useState(false);
  const formRef = useRef(null);

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  const handleCreateUserSubmit = async data => {
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
          senha: parseInt(data.senha),
        })
        .then(() => {
          updateUsersList();
        })
        .catch(error => console.log(error));
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
            <p>Cadastro de Usuário</p>
          </CreateUserModal.Title>
        </CreateUserModal.Header>
        <CreateUserModal.Body>
          <CreateUserForm id="form" onSubmit={handleCreateUserSubmit} ref={formRef}>
            <Input name="name" label="Nome" />
            <Input name="email" label="Email" />
            <Input name="password" label="Senha" />
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
