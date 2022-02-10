/* eslint-disable react/prop-types */
import React from 'react';
import { SocialMediaButton } from './styles';

export default function SubmitButton({ text, color, icon: Icon, ...rest }) {
  return (
    <SocialMediaButton type="button" color={color} {...rest}>
      <Icon />
      <span>{text}</span>
    </SocialMediaButton>
  );
}
