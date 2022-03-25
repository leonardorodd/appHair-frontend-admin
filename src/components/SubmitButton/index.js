/* eslint-disable react/prop-types */
import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { ButtonLogin } from './styles';

export default function SubmitButton({ loading, text, ...rest }) {
  return <ButtonLogin {...rest}>{loading ? <FaSpinner color="#FFF" size={16} /> : text}</ButtonLogin>;
}
