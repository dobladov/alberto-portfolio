import React from 'react';

import profileImageJpg from '../../images/profile.jpg';
import profileImageAvif from '../../images/profile.avif';
import profileImageWebp from '../../images/profile.webp';

import * as styles from './index.module.css';

export const ProfileImage = () => (
  <picture>
    <source
      srcSet={profileImageAvif}
      type="image/avif"
    />
    <source
      srcSet={profileImageWebp}
      type="image/webp"
    />
    <img
      width="400px"
      src={profileImageJpg}
      className={styles.profileImage}
      alt="Portrait of Alberto Doblado"
    />
  </picture>
);
