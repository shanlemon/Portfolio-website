import React from 'react'

export const MailTo = ({ email, subject, body, children }) => {
  return (
    <a className='link' href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>{children}</a>
  );
};