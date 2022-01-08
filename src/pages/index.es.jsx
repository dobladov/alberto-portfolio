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
        Soy un videógrafo y fotógrafo freelance localizado en Málaga (España),
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
      <h2>Projectos</h2>

      <Project
        watchText="Ver"
        name="Los Tirantitos"
        images={[
          { src: 'tirantitos-1', alt: 'Titulo del videoclip', pos: 'left' },
          { src: 'tirantitos-2', alt: 'Dos chicas a punto de besarse', pos: 'middle' },
          { src: 'tirantitos-3', alt: 'Vista aérea de un atardecer', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=AgPC9QQqd18"
      >
        Videoclip para una banda flamenco-pop, participantes del show de televisión
        {' '}
        <a href="https://www.youtube.com/watch?v=lkUyz4WruCA">Tierra de Talento</a>
        {' '}
        y finalistas en
        {' '}
        <a href="https://www.canalsur.es/television/programas/tierra-de-talento/noticia/1589807.html">Canal Sur Radio</a>
        .
      </Project>

      <Project
        watchText="Ver"
        name="Mondnacht"
        images={[
          { src: 'mondnacht-1', alt: 'Jaime Espinosa tocando el piano', pos: 'left' },
          { src: 'mondnacht-2', alt: 'Ambos musicos tocando', pos: 'middle' },
          { src: 'mondnacht-3', alt: 'Kitty Bazalgette cantando', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=TWDRQoaNrNk"
      >
        Interpretación de Robert Schumann por los músicos Jaime Espinosa (Piano)
        y Kitty Bazalgette (Soprano).
      </Project>

      <Project
        watchText="Ver"
        name="Por un puñado de clones"
        inverse
        images={[
          { src: 'clones-1', alt: 'Un tecnico abriendo una maleta', pos: 'left' },
          { src: 'clones-2', alt: 'Portada del video', pos: 'middle' },
          { src: 'clones-3', alt: 'Dos clones haciendo tareas simultáneamente', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=_kv1YdZp5VQ"
      >
        Corto sobre la despoblación de áreas rurales desde una nueva perspectiva,
        discutiéndolo desde el punto de vista de la ciencia ficción.
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
        desde cortos, videoclips musicales a documentales incluyendo moverme a otros países.
      </p>
      <p>
        Soy también tengo licencia para el pilotaje de drones.
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
