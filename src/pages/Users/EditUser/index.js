/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Container, CreateUserForm, CreateUserModal } from './styles';
import IconInput from '../../../components/UnformFields/IconInput';
import Input from '../../../components/UnformFields/Input';
import CheckBox from '../../../components/UnformFields/CheckBox';
import ComboBox from '../../../components/UnformFields/ComboBox';
import apiClient from '../../../services/apiClient';
import { useDispatch } from 'react-redux';
import { Scope } from '@unform/core';
import { MdEdit, MdContentCopy } from 'react-icons/md';
import { successMessage /* errorMessage */ } from '../../../store/modules/alert/actions';

const CreateUser = ({ updateUsersList, user }) => {
  const [show, setShow] = useState(false);
  const [randomPassword, setRandomPassword] = useState('');
  const [userLog, setUserLog] = useState('');
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const optionsStatus = [
    {
      value: true,
      label: 'Ativo',
    },
    {
      value: false,
      label: 'Inativo',
    },
  ];

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  /*   useEffect(() => {
    apiClient
      .get(`/admin/user/10/logs/access`)
      .then(result => {
        console.log('aqui: ', result);
      })
      .catch(error => console.log(error));
  }, [user.id]); */

  const handleUpdateUserSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório!'),
        email: Yup.string().email('O e-mail precisa ser válido.').required('O email é obrigatório!'),
        ativo: Yup.bool().required(),
        profile: Yup.object().shape({
          admin: Yup.bool().required(),
          dashboard: Yup.bool().required(),
        }),
        senha: Yup.string(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      delete data.ativo;
      data.senha === '' && delete data.senha;
      console.log(data);

      apiClient
        .put(`/admin/user/${user.id}`, { data })
        .then(() => {
          updateUsersList();
          dispatch(successMessage('Usuário alterado com sucesso'));
          handleClose();
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
      <MdEdit onClick={handleShow} />
      <CreateUserModal
        className="baseModalStyle"
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        backdrop="static"
      >
        <CreateUserModal.Header>
          <CreateUserModal.Title>
            <p>Edição de Usuário</p>
          </CreateUserModal.Title>
        </CreateUserModal.Header>
        <CreateUserModal.Body>
          <CreateUserForm id="form" onSubmit={handleUpdateUserSubmit} ref={formRef}>
            <Input name="nome" value={user.nome} label="Nome" />
            <Input name="email" value={user.email} label="Email" />
            <div>
              <IconInput
                name="senha"
                placeholder="Informe uma nova senha"
                value={randomPassword}
                disabled
                label="Alteração de senha"
              />
              <button
                type="button"
                onClick={() => setRandomPassword(Math.random().toString(36).substr(2, 10))}
                className="baseButtonStyle"
              >
                gerar senha
              </button>
            </div>
            <ComboBox
              name="ativo"
              classNamePrefix="react-select"
              options={optionsStatus}
              isSearchable={false}
              defaultValue={user.ativo ? optionsStatus[0] : optionsStatus[1]}
              blurInputOnSelect
              openMenuOnFocus
              placeholder="Selecione o status"
              label="Status"
            />
            <label style={{ marginBottom: '10px' }}>Controle de Acesso: </label>
            <Scope path="profile">
              <CheckBox name="admin" label="Acesso ao Painel Administrativo" defaultChecked={user?.profile?.admin} />
              <CheckBox name="dashboard" label="Acesso ao Dashboard" defaultChecked={user?.profile?.dashboard} />
            </Scope>
            <label>Último acesso</label>
            {/*  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>IP: {userLog.ip}</p>
              <p>Dispositivo: {userLog.dispositivo}</p>
            </div> */}
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
