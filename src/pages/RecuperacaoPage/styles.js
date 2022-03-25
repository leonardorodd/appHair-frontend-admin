import styled from 'styled-components';

export const BoxLogin = styled.div`
  align-items: center;
  border-radius: 0.3125rem;
  background: #000;
  box-shadow: 0px 0px 0.625rem #0000000d;
  display: flex;
  flex-direction: column;
  max-width: 35.6875rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  margin: 0 auto;
  margin-top: 7%;
  opacity: 80%;

  &:hover {
    background-color: rgb(250 91 11);
    opacity: 0.75;
  }
`;

export const ContainerBoxLogin = styled.div`
  width: 85%;
`;
export const ColBoxLogin = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  margin-top: 3.375rem;
  width: 80px;
  height: 50px;
`;
export const ButtonLogin = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 1.375rem;
  background-color: rgb(250 91 11);
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  font: 400 13.3333px Arial;
  min-width: 8.75rem;
  font-weight: 700;
  min-width: 8.75rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.3s ease;

  &:hover {
    background-color: rgb(250 91 11);
  }
`;

export const TitleBoxPanel = styled.h2`
  font-size: 1.425rem;
  margin-top: 3.375rem;
  font-weight: 700;
  color: rgb(250 91 11);
`;
export const Subtitle = styled.h3`
  color: #7c7c7c;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  margin-top: 0.3125rem;
`;
export const FormEntrar = styled.form`
  margin-bottom: 3.375rem !important;
`;

export const InputForm = styled.input`
  width: 100%;
  text-align: center;
  height: 3em;
  border: 0.0625rem solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  transition: color 0.3s ease, border-color 0.3s ease;
  margin-bottom: 1.25rem;

  &:hover {
    border-color: rgb(250 91 11);
  }
  &:focus {
    border-color: rgb(250 91 11);
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(250 91 11 / 60%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(250 91 11/ 60%);
  }
`;
