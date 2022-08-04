import styled from 'styled-components';

export const Container = styled.div`
  &:focus-within {
    > label {
      color: var(--base-tertiary-color);
    }
  }
`;
