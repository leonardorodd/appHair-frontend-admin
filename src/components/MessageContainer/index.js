/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Container } from './styles';
import { clearMessage } from '../../store/modules/alert/actions';
import { MdErrorOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
/* import { useLocation } from 'react-router-dom';
 */
export default function MessageContainer({ type, message }) {
  const dispatch = useDispatch();
  /*   const location = useLocation();
   */
  useEffect(() => {
    setTimeout(function () {
      dispatch(clearMessage());
      /*       document.getElementById('message').className = 'hide';
       */
    }, 5000);
  }, [dispatch]);

  return (
    <Container id="message" colorType={type}>
      <MdErrorOutline size={18} style={{ marginRight: '3px' }} />
      {message}
    </Container>
  );
}
