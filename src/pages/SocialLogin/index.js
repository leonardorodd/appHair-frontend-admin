import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInFailure } from '../../store/modules/auth/actions';
import apiClient from '../../services/apiClient';
import { useLocation } from 'react-router-dom';
import { signInSuccess } from '../../store/modules/auth/actions';

function SocialLogin() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    apiClient
      .get(`/login/google/callback${location.search}`)
      .then(response => {
        dispatch(signInSuccess(response.data));
      })
      .catch(error => {
        dispatch(signInFailure(error.msg));
      });
  }, [dispatch, location.search]);

  return null;
}

export default SocialLogin;
