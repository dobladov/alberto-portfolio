import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { Project } from '../components/Project';
import { Socials } from '../components/Socials';
import { ProfileImage } from '../components/ProfileImage';

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

      <ProfileImage
        alt="Portrait of Alberto Doblado"
      />

      <p className={styles.text}>
        I&apos;m a videographer and photographer based in Málaga (Spain),
        working at my own producing company
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://caraoculta.es/">Cara Oculta</a>
        .
      </p>
      <p>
        I&apos;ve worked with a wide range of clients for products, sports and specially in
        the musical field, translating talent of my clients into beautiful images and videos.
      </p>
    </Section>
    <Section>
      <h2>Projects</h2>

      <Project
        name="Los Tirantitos"
        images={[
          { src: 'tirantitos-1', alt: 'Video clip title' },
          { src: 'tirantitos-2', alt: 'Two girls about to kiss' },
          { src: 'tirantitos-3', alt: 'Sunset with an aerial view of the band' },
        ]}
        link="https://www.youtube.com/watch?v=AgPC9QQqd18"
      >
        Video clip for a flamenco-pop band, participants of the TV show
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=lkUyz4WruCA"
        >
          Tierra de Talento
        </a>
        {' '}
        and finalist of
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.canalsur.es/television/programas/tierra-de-talento/noticia/1589807.html"
        >
          Canal Sur Radio
        </a>
        .
      </Project>

      <Project
        name="Stay in the northern highlands"
        images={[
          { src: 'nororma-1', alt: 'missing' },
          { src: 'nororma-2', alt: 'missing' },
          { src: 'nororma-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/602155946"
      >
        Commercial for the northeastern region of Málaga (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sierranortedemalaga.es"
        >
          Sierra Norte
        </a>
        ) to promote tourism.
      </Project>

      <Project
        name="Youssef Kham Studio"
        images={[
          { src: 'youssef-1', alt: 'missing' },
          { src: 'youssef-2', alt: 'missing' },
          { src: 'youssef-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/614333922"
      >
        Spot to promote a barber wrokshop taught by
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/youssef_kham_studio/"
        >
          Youssef Kham
        </a>
        .
      </Project>

      <Project
        name="Mondnacht"
        images={[
          { src: 'mondnacht-1', alt: 'Jaime Espinosa playing the piano' },
          { src: 'mondnacht-2', alt: 'Both musicians performing together' },
          { src: 'mondnacht-3', alt: 'Kitty Bazalgette singing' },
        ]}
        link="https://www.youtube.com/watch?v=TWDRQoaNrNk"
      >
        Performance of Robert Schumann by the musicians
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/jaimeeespinosa/"
        >
          Jaime Espinosa
        </a>
        {' '}
        (Piano) and
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kittybsoprano/"
        >
          Kitty Bazalgette
        </a>
        {' '}
        (Soprano).
      </Project>

      <Project
        name="A Fistful of Clones"
        inverse
        images={[
          { src: 'clones-1', alt: 'A technician opening a radioactive toolbox' },
          { src: 'clones-2', alt: 'The poster for the short film' },
          { src: 'clones-3', alt: 'Two colnes performing task simultaneously' },
        ]}
        link="https://www.youtube.com/watch?v=_kv1YdZp5VQ"
      >
        Short film about the depopulation of rural areas from a new perspective,
        taking it to the realm of the science fiction.
      </Project>

      <Project
        name="Mae Mía"
        images={[
          { src: 'maemia-1', alt: 'missing' },
          { src: 'maemia-2', alt: 'missing' },
          { src: 'maemia-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/610911773"
      >
        Making-of for the urban music video
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=lp3A4D4WHAQ"
        >
          Mae Mía
        </a>
        {' '}
        for the artist
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/cyclomusica"
        >
          Cyclo
        </a>
      </Project>

      <Project
        name="Al-Flamenco"
        images={[
          { src: 'flamenco-1', alt: 'missing' },
          { src: 'flamenco-2', alt: 'missing' },
          { src: 'flamenco-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/602105045"
      >
        Teaser for the official music video
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=ioIDT0o7z0U"
        >
          Al-Flamenco
        </a>
        {' '}
        interpreted by
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/angeldvera_/"
        >
          Ángel Vera
        </a>
        .
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
        I&apos;m also a licensed drone pilot.
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
