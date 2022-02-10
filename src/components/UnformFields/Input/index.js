/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Input({ name, label, value, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={value || defaultValue}
        placeholder={label || ''}
        style={error && { borderColor: 'red' }}
        {...rest}
      />

      {error && (
        <span style={{ color: 'red', marginBottom: '2px' }}>
          <MdErrorOutline size={18} style={{ marginRight: '3px' }} />
          {error}
        </span>
      )}
    </Container>
  );
}
