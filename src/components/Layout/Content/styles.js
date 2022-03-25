import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  grid-area: main;
  padding: 30px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
`;
