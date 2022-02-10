import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /*   background: #dbdbdb;
 */
  background: var(--tertiary-text-color);
  height: 100%;
`;

export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #fff;
  width: 25%;
  padding: 25px;
  margin-bottom: 80px;

  > img {
    width: 100%;
    max-width: 130px;
    height: auto;
  }
`;

export const SignInForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    color: var(--primary-text-color);
    padding: 0px 10px;
    margin: 10px 0px -10px 0px;
    background: #fff;
    z-index: 1;
  }

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
  color: var(--secondary-text-color);
`;
export const Subtitle = styled.h3`
  color: var(--primary-text-color);
  font-size: 14px;
  margin-bottom: 20px;
`;

export const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid var(--primary-border-color);

  > button {
    margin-top: 15px;
  }
`;
