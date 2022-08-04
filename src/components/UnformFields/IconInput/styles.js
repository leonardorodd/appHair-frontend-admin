import styled from 'styled-components';

export const Container = styled.div.attrs(props => props)`
  
    div {
        display: flex;
        align-items: center;
        background: ${props => (props.disabled ? '#eee' : '#fff')};
        height: 35px;
        width: 100%;
        border: 1px solid var(--primary-border-color);
        border-radius: 10px;
        padding: 15px;
        border-radius: 50px;

        svg {
            color: var(--base-tertiary-color)
            height: 22px;
            width: 28px;
        }

        input {
            border: none;
            color: var(--primary-text-color);
            width: 100%;
        }
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

    > div {
      border-color: var(--base-tertiary-color);
      
      > input {
        border-color: var(--base-tertiary-color);
      }
    }  
  }
`;
