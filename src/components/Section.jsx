import React from 'react';

import 'normalize.css';
import './global.css';

export const Section = ({
  children,
  full,
  className,
  style,
}) => {
  const section = {
    paddingTop: '5rem',
    fontSize: '2rem',
    lineHeight: '3rem',
    padding: '1rem 3rem 1rem 3rem',
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const sectionFull = {
    minHeight: '100vh',
  };

  return (
    <div
      className={className}
      style={{
        ...section,
        ...style,
        ...(full ? sectionFull : {}),
      }}
    >
      <div>
        {children}
      </div>
    </div>
  );
};
