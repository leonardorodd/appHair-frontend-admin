/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label>
        <input
          style={{ verticalAlign: 'middle', marginRight: '10px' }}
          ref={inputRef}
          id={fieldName}
          type="checkbox"
          {...rest}
        />
        {label || ''}
      </label>
      {error && (
        <span style={{ color: '#db3b21', marginBottom: '2px' }}>
          <MdErrorOutline size={18} style={{ marginRight: '3px' }} />
          {error}
        </span>
      )}
    </Container>
  );
}
