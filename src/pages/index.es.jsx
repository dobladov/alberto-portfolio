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

const attributes = ['Fotógrafo', 'Piloto de drones', 'Colorista', 'Editor', 'Cinematógrafo', 'Videógrafo', 'Guionista'];

const IndexPage = () => (
  <main
    className={styles.container}
  >
    <Helmet
      htmlAttributes={{
        lang: 'es',
      }}
    />
    <Header attributes={attributes} />
    <Section
      full
      className="intro"
    >
      <title>Alberto Doblado - Fotógrafo y Videógrafo</title>
      <h1 className={styles.title}>
        Alberto Doblado
      </h1>

      <ProfileImage
        alt="Retrato de Alberto Doblado"
      />

      <p className={styles.text}>
        Soy un videógrafo y fotógrafo localizado en Málaga (España),
        trabajando para mi propia productora
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://caraoculta.es/">Cara Oculta</a>
        .
      </p>
      <p>
        He trabajado con una amplia gama de clientes para productos, deportes y
        especialmente en el campo musical, traduciendo el talento de mis clientes
        en bellas imágenes y vídeos.
      </p>
    </Section>
    <Section>
      <h2>Proyectos</h2>

      <Project
        watchText="Ver"
        name="Los Tirantitos"
        images={[
          { src: 'tirantitos-1', alt: 'Titulo del videoclip' },
          { src: 'tirantitos-2', alt: 'Dos chicas a punto de besarse' },
          { src: 'tirantitos-3', alt: 'Vista aérea de un atardecer' },
        ]}
        link="https://www.youtube.com/watch?v=AgPC9QQqd18"
      >
        Videoclip para una banda flamenco-pop, participantes del show de televisión
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=lkUyz4WruCA"
        >
          Tierra de Talento
        </a>
        {' '}
        y finalistas en
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
        watchText="Ver"
        name="Quédate en Sierra Norte"
        images={[
          { src: 'nororma-1', alt: 'missing' },
          { src: 'nororma-2', alt: 'missing' },
          { src: 'nororma-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/602155946"
      >
        Comercial para promover el turismo en la comarca nororiental de Málaga
        {' '}
        (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sierranortedemalaga.es"
        >
          Sierra Norte
        </a>
        ).
      </Project>

      <Project
        watchText="Ver"
        name="Youssef Kham Studio"
        images={[
          { src: 'youssef-1', alt: 'missing' },
          { src: 'youssef-2', alt: 'missing' },
          { src: 'youssef-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/614333922"
      >
        Comercial para promover un taller de barbería impartido por
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
        watchText="Ver"
        name="Mondnacht"
        images={[
          { src: 'mondnacht-1', alt: 'Jaime Espinosa tocando el piano' },
          { src: 'mondnacht-2', alt: 'Ambos musicos tocando' },
          { src: 'mondnacht-3', alt: 'Kitty Bazalgette cantando' },
        ]}
        link="https://www.youtube.com/watch?v=TWDRQoaNrNk"
      >
        Interpretación de Robert Schumann por los músicos
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/jaimeeespinosa/"
        >
          Jaime Espinosa
        </a>
        {' '}
        (Piano)
        y
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
        watchText="Ver"
        name="Por un puñado de clones"
        inverse
        images={[
          { src: 'clones-1', alt: 'Un tecnico abriendo una maleta' },
          { src: 'clones-2', alt: 'Portada del video' },
          { src: 'clones-3', alt: 'Dos clones haciendo tareas simultáneamente' },
        ]}
        link="https://www.youtube.com/watch?v=_kv1YdZp5VQ"
      >
        Corto sobre la despoblación de áreas rurales desde una nueva perspectiva,
        llevandolo a la ciencia ficción.
      </Project>

      <Project
        watchText="Ver"
        name="Mae Mía"
        images={[
          { src: 'maemia-1', alt: 'missing' },
          { src: 'maemia-2', alt: 'missing' },
          { src: 'maemia-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/610911773"
      >
        Making-of para el vídeo de música urbana
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=lp3A4D4WHAQ"
        >
          Mae Mía
        </a>
        {' '}
        del artista
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
        watchText="Ver"
        name="Al-Flamenco"
        images={[
          { src: 'flamenco-1', alt: 'missing' },
          { src: 'flamenco-2', alt: 'missing' },
          { src: 'flamenco-3', alt: 'missing' },
        ]}
        link="https://vimeo.com/602105045"
      >
        Adelanto del vídeo musical oficial
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=ioIDT0o7z0U"
        >
          Al-Flamenco
        </a>
        {' '}
        interpretado por
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
      <h2>Contacto</h2>
      <p>
        Actualmente, estoy disponible para trabajar en cualquier tipo de proyecto,
        desde cortos, videoclips, comerciales o documentales, incluyendo moverme a otros países.
      </p>
      <p>
        También tengo licencia de piloto de drones y radiofonista.
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
