/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import Input from '../../components/UnformFields/Input';
import ProfilePhoto from '../../assets/img/profile.jpg';

function Profile() {
  const { user, token } = useSelector(state => state.auth);
  return (
    <Container>
      <img src={ProfilePhoto} alt="profile" />
      <Input name="nome" label="Nome" disabled value={user.nome} />
      <Input name="email" label="E-mail" disabled value={user.email} />
      <Input name="nivel" label="Nivel de acesso" disabled value={user.admin ? 'Administrador' : 'Usuário'} />
    </Container>
  );
}

export default Profile;
