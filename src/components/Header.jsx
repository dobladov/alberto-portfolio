import React, { useEffect, useState } from 'react';
import { Progress } from './Progress';
import { Typer } from './Typer';

import * as styles from './Header/index.module.css';

const attributes = ['Photographer', 'Drone Pilot', 'Colorist', 'Editor', 'Cinematographer', 'Videographer', 'Screenwriter'];

export const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const getScrollPercent = () => {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    const precentage = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    setScrollProgress(precentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollPercent);
    return () => {
      window.removeEventListener('scroll', getScrollPercent);
    };
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        transform: `translateY(${scrollProgress > 3 ? '-95%' : 0})`,
      }}
    >
      <div style={{
        position: 'relative',
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e6e6e6',
        margin: '0 auto',
        width: '100%',
        maxWidth: '1400px',
      }}
      >
        <h2 style={{
          margin: 0,
          padding: '0 .5rem',
        }}
        >
          <Typer words={attributes} />
        </h2>
        {/* <nav>
          <button className="btn" type="button">
            EN
          </button>
          <button className="btn" type="button">
            ES
          </button>
        </nav> */}
        <Progress progress={scrollProgress} />
      </div>
    </header>
  );
};
