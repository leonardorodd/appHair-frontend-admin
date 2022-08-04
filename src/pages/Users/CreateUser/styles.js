import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from '@unform/web';

export const Container = styled.div`
  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      margin-left: 5px;
      height: 8px;
      width: 8px;
    }
  }
`;

export const CreateUserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 35px;
`;

export const CreateUserModal = styled(Modal)``;
