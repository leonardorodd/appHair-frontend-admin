import styled from 'styled-components';

export const Container = styled.div.attrs()`
  padding: 15px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  font-size: 16px;
  z-index: 999999999999;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 16px;
    height: 16px;
  }

  /*   opacity: 1;
  transition: opacity 500ms; */

  /* .hide {
    opacity: 0;
  }
 */
  ${props => {
    if (props.colorType === 'alert-success') {
      return `
        color: #155724;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
    `;
    } else {
      return `
        color: #721c24;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
    `;
    }
  }}
`;
