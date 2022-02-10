import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Container, Title, Subtitle, BoxLogin, SignInForm, SocialMediaBox } from './styles';
import { signInRequest } from '../../store/modules/auth/actions';
/* import Logo from '../../assets/img/logo.png';
 */ import Logo2 from '../../assets/img/logotipoLaranja.png';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/UnformFields/Input';
import { RiFacebookFill, RiGoogleFill } from 'react-icons/ri';
import SocialMediaButton from '../../components/SocialMediaButton';
import /* Link */ 'react-router-dom';

function LoginPage() {
  const formRef = useRef();
  const dispatch = useDispatch();

  async function handleSignInSubmit(data, { reset }) {
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

      dispatch(signInRequest(email, password));

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

  const { loggingIn } = useSelector(state => state.auth);

  return (
    <Container>
      <BoxLogin>
        <img src={Logo2} />
        <SignInForm ref={formRef} onSubmit={handleSignInSubmit}>
          <Title>Painel Administrativo</Title>
          <Subtitle>Insira seu e-mail e senha</Subtitle>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" type="password" />
          <SubmitButton loading={loggingIn} text={'Entrar'} />
          {/*           <Link to="/register">Registrar</Link>
           */}{' '}
          <span>Ou entrar com</span>
          <SocialMediaBox>
            <SocialMediaButton loading={loggingIn} text={'Facebook'} color="#4267B2" icon={RiFacebookFill} />
            <SocialMediaButton loading={loggingIn} text={'Google'} color="#D0463B" icon={RiGoogleFill} />
          </SocialMediaBox>
        </SignInForm>
      </BoxLogin>
    </Container>
  );
}

export default LoginPage;
