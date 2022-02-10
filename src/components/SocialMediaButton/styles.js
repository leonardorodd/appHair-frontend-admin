import styled from 'styled-components';

export const SocialMediaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
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
    background-color: ${props => props.color};
    opacity: 0.89;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  > span {
    margin-left: 5px;
  }

  svg {
    width: 15px;
    height: 15px;
  }

  // disable Bootstrap shadow
  &:focus {
    box-shadow: none !important;
  }
`;
