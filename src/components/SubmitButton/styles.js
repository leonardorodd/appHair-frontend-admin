import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const ButtonLogin = styled.button`
  background-color: var(--base-tertiary-color) !important;
  border: none;
  color: #fff;
  border-radius: 20px;
  width: 100%;
  font-size: 11px;
  height: 35px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.3s ease;

  &:hover {
    background-color: var(--base-tertiary-color);
    opacity: 0.89;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // disable Bootstrap shadow
  &:focus {
    box-shadow: none !important;
  }

  svg {
    margin-left: 5px;
    animation: ${rotate} 2s linear infinite;
  }
`;
