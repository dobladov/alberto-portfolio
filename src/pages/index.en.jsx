import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { Project } from '../components/Project';
import { Socials } from '../components/Socials';

import profileImage from '../images/profile.jpg';
import tirantitos1 from '../images/tirantitos-1.jpg';
import tirantitos2 from '../images/tirantitos-2.jpg';
import tirantitos3 from '../images/tirantitos-3.jpg';

import clones1 from '../images/clones-1.jpg';
import clones2 from '../images/clones-2.png';
import clones3 from '../images/clones-3.jpg';

import mondnacht1 from '../images/mondnacht-1.png';
import mondnacht2 from '../images/mondnacht-2.png';
import mondnacht3 from '../images/mondnacht-3.png';

import * as styles from './index.module.css';

import 'normalize.css';
import '../components/global.css';

const attributes = ['Photographer', 'Drone Pilot', 'Colorist', 'Editor', 'Cinematographer', 'Videographer', 'Screenwriter'];

const IndexPage = () => (
  <main
    className={styles.container}
  >
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    />
    <Header attributes={attributes} />
    <Section
      full
      className="intro"
    >
      <title>Alberto Doblado - Photographer &amp; Videographer</title>
      <h1 className={styles.title}>
        Alberto Doblado
      </h1>

      <img
        className={styles.profileImage}
        width="400px"
        src={profileImage}
        alt="Portrait of Alberto Doblado"
      />

      <p className={styles.text}>
        Is a freelance videographer and photographer based in Málaga (Spain),
        working at his own producing company
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://caraoculta.es/">Cara Oculta</a>
        .
      </p>
      <p>
        He has worked with a wide range of clients for products, sports and specially in
        the musical field, translating their client&apos;s talent into beautiful images and videos.
      </p>
    </Section>
    <Section>
      <h2>Projects</h2>

      <Project
        name="Los Tirantitos"
        images={[
          { src: tirantitos1, alt: 'Video clip title', pos: 'left' },
          { src: tirantitos2, alt: 'Two girls about to kiss', pos: 'middle' },
          { src: tirantitos3, alt: 'Sunset with an aerial view of the band', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=AgPC9QQqd18"
      >
        Video clip for a flamenco-pop band, participants of the TV show
        {' '}
        <a href="https://www.youtube.com/watch?v=lkUyz4WruCA">Tierra de Talento</a>
        {' '}
        and finalist of
        {' '}
        <a href="https://www.canalsur.es/television/programas/tierra-de-talento/noticia/1589807.html">Canal Sur Radio</a>
        .
      </Project>

      <Project
        name="Mondnacht"
        images={[
          { src: mondnacht1, alt: 'Jaime Espinosa playing the piano', pos: 'left' },
          { src: mondnacht2, alt: 'Both musicians performing together', pos: 'middle' },
          { src: mondnacht3, alt: 'Kitty Bazalgette singing', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=TWDRQoaNrNk"
      >
        Performance of Robert Schumann by the mussicians Jaime Espinosa (Piano)
        and Kitty Bazalgette (Soprano).
      </Project>

      <Project
        name="A Fistful of Clones"
        inverse
        images={[
          { src: clones1, alt: 'A technician opening a radioactive toolbox', pos: 'left' },
          { src: clones2, alt: 'The poster for the short film', pos: 'middle' },
          { src: clones3, alt: 'Two colnes performing task simultaneously', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=_kv1YdZp5VQ"
      >
        Short film about the depopulation of rural areas from a new perspective,
        taking it to the realm of the science fiction.
      </Project>
    </Section>

    <Section
      style={{
        fontSize: '1.5rem',
      }}
    >
      <h2>Contact</h2>
      <p>
        At the moment, I&apos;m available to work with any kind of project,
        from a short film, music video to a long
        documentary including moving to other countries.
      </p>
      <p>
        I'm also a licensed drone pilot.
      </p>
      <a href="tel:+34688977721">+34 688 97 77 21</a>
      <br />
      <a
        style={{
          wordBreak: 'break-word',
        }}
        href="mailto:alberto.doblado.vera@gmail.com"
      >
        alberto.doblado.vera@gmail.com
      </a>
    </Section>

    <Section>
      <Socials />
    </Section>
  </main>
);

export default IndexPage;
