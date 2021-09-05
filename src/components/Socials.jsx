import { Instagram, Twitter, Youtube } from 'react-feather';
import React from 'react';

const icon = {
  width: '3rem',
  height: '3rem',
};

const socials = [
  ['https://www.instagram.com/albertodobladov/', Instagram],
  ['https://www.twitter.com/albertodobladov/', Twitter],
  ['https://www.youtube.com/channel/UCuh68AZF3sxVJlxC1IqbjfQ/', Youtube],
];

export const Socials = () => (
  <div style={{
    display: 'flex',
    gap: '2rem',
    padding: '3rem 0',
  }}
  >
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
