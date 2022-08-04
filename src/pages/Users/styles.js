import styled from 'styled-components';

export const Container = styled.div`
  table {
    color: var(--primary-text-color);

    > thead > tr {
    }

    > tbody > tr > :nth-child(4) {
      > svg {
        &:hover {
          color: var(--base-tertiary-color);
        }
      }
    }
  }
`;

export const PageTitle = styled.div`
  margin-bottom: 45px;

  > p {
    font-weight: bold;
    font-size: 20px;
    color: var(--base-tertiary-color);
    width: max-content;
  }

  > p::after {
    content: '';
    display: block;
    width: 95%;
    border-bottom: 3px solid #fd854b;
  }

  > div {
    display: 'flex';
    align-itens: 'center';
    justify-content: 'space-between';
  }
`;
