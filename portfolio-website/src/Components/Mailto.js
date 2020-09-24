import React from 'react'

export const Mailto = ({ email, subject, body, children }) => {
  return (
    <a className='link' href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>{children}</a>
  );
};