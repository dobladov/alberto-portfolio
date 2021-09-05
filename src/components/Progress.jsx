import React from 'react';

export const Progress = ({ progress }) => (
  <div style={{
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: `${progress}%`,
    height: '2px',
    backgroundColor: 'white',
  }}
  />
);
