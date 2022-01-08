import React from 'react';
import {
  Instagram,
  Film,
  Camera,
  Linkedin,
} from 'react-feather';

const icon = {
  width: '3rem',
  height: '3rem',
};

const socials = [
  ['https://vimeo.com/albertodobladov', Film, 'Vimeo'],
  ['https://www.behance.net/AlbertoDV', Camera, 'Behance'],
  ['https://www.linkedin.com/in/alberto-doblado-vera', Linkedin, 'LinkedIn'],
  ['https://www.instagram.com/albertodobladov/', Instagram, 'Instagram'],
];

export const Socials = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    padding: '3rem 0',
  }}
  >
    {socials.map(([url, Icon, title]) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={url}
        href={url}
        title={title}
      >
        <Icon style={icon} />
      </a>
    ))}
  </div>
);
