/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../../store/modules/user/actions';
import * as Yup from 'yup';
import Logo from '../../assets/img/logo.png';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/UnformFields/Input';
import { Container, Title, Subtitle, BoxRegister, RegisterForm } from './styles';

function RegisterPage() {
  const dispatch = useDispatch();
  const formRef = useRef();

  async function handleRegisterSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email('Insira um e-mail válido').required('O E-mail é necessário'),
        password: Yup.string().required('A Senha é necessária'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;

      dispatch(registerRequest(email, password));

      reset();
    } catch (err) {
      // Form validation error
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  const { registering } = useSelector(state => state.user);
  /*   const { user, submitted } = userData;
   */
  return (
    <Container>
      <BoxRegister>
        <img src={Logo} />
        <RegisterForm ref={formRef} onSubmit={handleRegisterSubmit}>
          <Title>Painel Administrativo</Title>
          <Subtitle>Registro de novo usuário</Subtitle>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" type="password" />
          <SubmitButton loading={registering} text={'Entrar'} />
          <Link to="/login">Voltar para login</Link>
        </RegisterForm>
      </BoxRegister>
    </Container>
  );

  /*  <div className="ColBoxRegister">
      <S.TitleBoxPanel>Registrar</S.TitleBoxPanel>

      <form name="form" onSubmit={handleSubmit}>
        <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
          <S.Subtitle>Insira seu e-mail</S.Subtitle>
          <S.InputForm
            type="email"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="email@seudominio.com"
            required
          />
          {submitted && !user.username && <div className="help-block">O E-mail do usuário é necessário</div>}
        </div>
        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
          <S.Subtitle>Insira sua senha</S.Subtitle>
          <S.InputForm
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Sua senha"
          />
          {submitted && !user.password && <div className="help-block">A senha é necessária</div>}
        </div>
        <div className="form-group">
          <S.ButtonLogin className="btn btn-primary">Registrar</S.ButtonLogin>
          {registering && (
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          )}

          <Link to="/login" className="btn btn-link">
            Cancelar
          </Link>
        </div>
      </form>
    </div> */
}
export default RegisterPage;
