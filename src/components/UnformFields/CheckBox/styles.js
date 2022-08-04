import styled from 'styled-components';

export const Container = styled.div`
  input[type='checkbox'] {
    border: 1px solid var(--base-tertiary-color);
    border-radius: 5px;
    position: relative;
    width: 20px;
    height: 20px;
    appearance: none;
    cursor: pointer;

    &::before {
      position: absolute;
      content: '';
      top: 2px;
      left: 6px;
      width: 8px;
      height: 14px;
      border-style: solid;
      border-color: white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    &:checked {
      border: none;
      background: var(--base-tertiary-color);
    }
  }
`;
