/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { MdErrorOutline } from 'react-icons/md';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function Input({ name, label, value, icon: Icon, ...rest }) {
  const inputRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function setPasswordVisibility() {
    setPasswordVisible(!passwordVisible);
    console.log(inputRef.current.attributes.type.value);

    document.getElementById('password').attributes.type.value = passwordVisible ? 'password' : 'text';
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <div style={error && { borderColor: '#db3b21' }}>
        {Icon && <Icon />}
        <input ref={inputRef} id={fieldName} defaultValue={value || defaultValue} placeholder={label || ''} {...rest} />

        {passwordVisible ? (
          <IoMdEye onClick={setPasswordVisibility} id="passwordEyeIcon" />
        ) : (
          <IoMdEyeOff onClick={setPasswordVisibility} id="passwordEyeIcon" />
        )}
      </div>

      {error && (
        <span style={{ color: '#db3b21', marginBottom: '2px' }}>
          <MdErrorOutline size={18} style={{ marginRight: '3px' }} />
          {error}
        </span>
      )}
    </>
  );
}
