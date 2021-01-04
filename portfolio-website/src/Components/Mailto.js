import React from 'react';
import styled from 'styled-components';

const RedirectLink = styled.a`
  text-decoration: none;
  color: white;
`;

export const MailTo = ({ email, subject, body, children }) => {
  return (
    <RedirectLink
      className='link'
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
    >
      {children}
    </RedirectLink>
  );
};
