import React from 'react';
import { Play } from 'react-feather';

import * as styles from './index.module.css';

export const Project = ({
  name,
  children,
  images,
  link,
  watchText = 'Watch',
}) => (
  <div style={{
    paddingBottom: '3em',
    minHeight: '65vh',
  }}
  >
    <div
      className={styles.projectName}
    >
      <h3
        className={styles.projectTitle}
      >
        {name}
      </h3>
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
          justifyContent: 'center',
          borderRadius: '50%',
          padding: '.5rem',
          fontSize: '1rem',
        }}
      >
        <Play />
        {' '}
        {watchText}
      </a>
      )}
    </div>
    <p
      style={{
        padding: '1em 0',
        fontSize: '1.5rem',
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
      className={styles.container}
    >
      {images.map(({ src, alt, pos }, i) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          key={src}
        >
          <picture
            className={pos}
            style={{
              position: 'relative',
              top: `${2 * i}rem`,
            }}
          >
            <source srcSet={require(`../../images/${src}.avif`).default} />
            <source srcSet={require(`../../images/${src}.webp`).default} />
            <img
              className={styles.image}
              width="400px"
              src={require(`../../images/${src}.jpg`).default}
              alt={alt}
            />
          </picture>
        </a>
      ))}
    </div>

  </div>
);
