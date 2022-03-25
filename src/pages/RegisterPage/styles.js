import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #dbdbdb;
  height: 100%;
`;

export const BoxRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--tertiary-text-color);
  width: 25%;
  padding: 25px;
  margin-bottom: 80px;

  > img {
    width: 100%;
    max-width: 225px;
    height: auto;
  }
`;

export const RegisterForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    font-size: 14px;
    margin-top: 10px;
    color: var(--base-secondary-color);
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  color: var(--base-secondary-color);
`;
export const Subtitle = styled.h3`
  color: var(--base-secondary-color);
  font-size: 14px;
  margin-bottom: 20px;
`;
