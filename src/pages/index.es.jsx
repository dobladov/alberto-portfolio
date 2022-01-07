import React from 'react';
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

const attributes = ['Fotógrafo', 'Piloto de drones', 'Colorista', 'Editor', 'Cinematógrafo', 'Videógrafo', 'Guionista'];

const IndexPage = () => (
  <main
    className={styles.container}
  >
    <Header attributes={attributes} />
    <Section
      full
      className="intro"
    >
      <title>Alberto Doblado - Fotografo &amp; Videografo</title>
      <h1 className={styles.title}>
        Alberto Doblado
      </h1>

      <img
        className={styles.profileImage}
        width="400px"
        src={profileImage}
        alt="Retrato de Alberto Doblado"
      />

      <p className={styles.text}>
        Es un videógrafo y fotógrafo freelance localizado en Málaga (España),
        trabajado en su propia productora
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://caraoculta.es/">Cara Oculta</a>
        .
      </p>
      <p>
        Ha trabajado con una amplia gama de clientes para productos, deportes y
        especialmente en el campo musical, traduciendo el talento de sus clientes
        en bellas imágenes y vídeos.
      </p>
    </Section>
    <Section>
      <h2>Projectos</h2>

      <Project
        watchText="Ver"
        name="Los Tirantitos"
        images={[
          { src: tirantitos1, alt: 'Titulo del videoclip', pos: 'left' },
          { src: tirantitos2, alt: 'Dos chicas a punto de besarse', pos: 'middle' },
          { src: tirantitos3, alt: 'Vista aérea de un atardecer', pos: 'right' },
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
          { src: mondnacht1, alt: 'Jaime Espinosa tocando el piano', pos: 'left' },
          { src: mondnacht2, alt: 'Ambos musicos tocando', pos: 'middle' },
          { src: mondnacht3, alt: 'Kitty Bazalgette cantando', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=TWDRQoaNrNk"
      >
        Interpretación de Robert Schumann por los músicos Jaime Espinosa (Piano)
        y Kitty Bazalgette (Soprano).
      </Project>

      <Project
        watchText="Ver"
        name="A Fistful of Clones"
        inverse
        images={[
          { src: clones1, alt: 'Un tecnico abriendo una maleta', pos: 'left' },
          { src: clones2, alt: 'Portada del video', pos: 'middle' },
          { src: clones3, alt: 'Dos clones haciendo tareas simultáneamente', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=_kv1YdZp5VQ"
      >
        Corto sobre la despoblación de áreas rurales desde una nueva perspectiva,
        discutiéndolo desde elpunto de vista de la ciencia ficción.
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
        desde cortos, videoclips musicales a largos documentales incluyendo moverme a otros países.
      </p>
      <p>
        Soy también un piloto de drones licenciado.
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
