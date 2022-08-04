/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Input({ name, disabled, label, value, icon: Icon, ...rest }) {
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
    <Container disabled={disabled}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <div disabled style={error && { borderColor: '#db3b21' }}>
        <input
          disabled={disabled}
          ref={inputRef}
          id={fieldName}
          defaultValue={value || defaultValue}
          placeholder={label || ''}
          {...rest}
        />
        {Icon && <Icon />}
      </div>

      {error && (
        <span style={{ color: '#db3b21', marginBottom: '2px' }}>
          <MdErrorOutline size={18} style={{ marginRight: '3px' }} />
          {error}
        </span>
      )}
    </Container>
  );
}
