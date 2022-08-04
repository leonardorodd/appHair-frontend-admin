import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const CreateUserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 35px;

  > div:not(:last-child) {
    margin-bottom: 10px;
  }

  > :nth-child(3) {
    display: flex;
    align-items: end;
    justify-content: space-between;

    > div {
      width: 80%;
    }

    > button {
      width: 19%;
    }
  }
`;

export const CreateUserModal = styled(Modal)``;
