/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signOut } from '../../store/modules/auth/actions';
import apiClient from '../../services/apiClient';
import { useLocation, useHistory } from 'react-router-dom';
import { errorMessage } from '../../store/modules/alert/actions';
import { signInSuccess } from '../../store/modules/auth/actions';

function SocialLogin() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    apiClient
      .get(`/login/google/callback${location.search}`)
      .then(response => {
        console.log('aqui: ', response.data);
        dispatch(signInSuccess(response.data));
      })
      .catch(error => {
        dispatch(signInFailure(error.msg));
      })
      .finally(() => {
        setTimeout(() => history.push('/'), 3000);
      });
  }, [dispatch, history, location.search]);

  return <></>;
}

export default SocialLogin;
