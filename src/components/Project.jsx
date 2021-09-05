import React from 'react';
import { PlayCircle } from 'react-feather';

import './projects.css';

export const Project = ({
  name,
  children,
  images,
  link,
  inverse,
}) => (
  <div style={{
    paddingBottom: '3em',
    minHeight: '65vh',
  }}
  >
    <div
      className="projectName"
    >
      <h4>{name}</h4>
      {link
      && (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        style={{
          display: 'flex',
          gap: '0.5em',
          alignItems: 'center',
          textDecoration: 'none',
          border: '1px solid var(--text)',
          borderRadius: '5px',
          padding: '0 1rem',
          fontSize: '.5em',
          background: 'var(--background)',
        }}
      >
        <PlayCircle />
        {' '}
        Watch
      </a>
      )}
    </div>
    <p
      style={{
        padding: '1em 0',
        fontSize: '.7em',
        lineHeight: '1.5em',
      }}
    >
      {children}
    </p>

    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
      className="container"
    >
      {images.map(({ src, alt, pos }, i) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          key={src}
        >
          <img
            className={pos}
            width="400px"
            src={src}
            alt={alt}
            style={{
              position: 'relative',
              top: `${2 * i}rem`,
            }}
          />
        </a>
      ))}
    </div>

  </div>
);
