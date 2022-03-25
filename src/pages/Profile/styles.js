import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled(Form)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    border-radius: 50%;
    width: 250px;
    height: 250px;
  }
`;
