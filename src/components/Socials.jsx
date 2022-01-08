import React from 'react';
import {
  Instagram,
  Film,
  Camera,
  Linkedin,
} from 'react-feather';

// import Vimeo from '../images/vimeo.inline.svg';

const icon = {
  width: '3rem',
  height: '3rem',
};

const socials = [
  ['https://vimeo.com/user24354353', Film],
  ['https://www.behance.net/AlbertoDV', Camera],
  ['https://www.linkedin.com/in/alberto-doblado-vera', Linkedin],
  ['https://www.instagram.com/albertodobladov/', Instagram],
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
    {/* <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://vimeo.com/user24354353"
    > */}
    {/* <img
        style={icon}
        src={Vimeo}
        alt="Vimeo"
      /> */}
    {/* <Vimeo style={icon} />
    </a> */}
    {socials.map(([url, Icon]) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={url}
        href={url}
      >
        <Icon style={icon} />
      </a>
    ))}
  </div>
);
