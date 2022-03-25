import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 5px 5px 15px 5px;
  flex-direction: column;
  width: 100%;

  > input {
    border-radius: 50px;
    border: 1px solid var(--primary-border-color);
    height: 35px;
    padding: 15px;
    color: var(--primary-text-color);
  }

  > span {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: var(--base-tertiary-color);

    > svg {
      width: 16px;
      height: 16px;
    }
  }

  &:focus-within {
    > label {
      color: var(--base-tertiary-color);
    }

    > input {
      border-color: var(--base-tertiary-color);
    }
  }
`;
