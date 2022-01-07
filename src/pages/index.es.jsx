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

const attributes = ['Fotografo', 'Piloto de drones', 'Colorista', 'Editor', 'Cinematografo', 'Videografo', 'Guionista'];

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
        Es un videografo y fotografo freelance localizado en Málaga (España),
        trabajado en su propia productura
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
          { src: tirantitos1, alt: 'Titulo del video-clip', pos: 'left' },
          { src: tirantitos2, alt: 'Dos chicas a punto de vesarse', pos: 'middle' },
          { src: tirantitos3, alt: 'Sunset with an aerial view of the and', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=AgPC9QQqd18"
      >
        video clip para una banda flamenco-pop, participantes del show de television
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
          { src: mondnacht1, alt: 'One', pos: 'left' },
          { src: mondnacht2, alt: 'One', pos: 'middle' },
          { src: mondnacht3, alt: 'One', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=TWDRQoaNrNk"
      >
        Interpretacion de Robert Schumann por los musicos Jaime Espinosa (Piano)
        y Kitty Bazalgette (Soprano).
      </Project>

      <Project
        watchText="Ver"
        name="A Fistful of Clones"
        inverse
        images={[
          { src: clones1, alt: 'One', pos: 'left' },
          { src: clones2, alt: 'One', pos: 'middle' },
          { src: clones3, alt: 'One', pos: 'right' },
        ]}
        link="https://www.youtube.com/watch?v=_kv1YdZp5VQ"
      >
        Corto sobre la despoblacion de areas ruales desde una nueva perspectiva,
        discutiendolo desde el punto de vista de la ciencia ficcion.
      </Project>
    </Section>

    <Section
      style={{
        fontSize: '1.5rem',
      }}
    >
      <h2>Contacto</h2>
      <p>
        Actualmente estoy disponible para trabajar en cualquier tipo de proyecto,
        desde cortos, videoclips musicales a loargos documentales inluyendo moverme a otros paises.
      </p>
      <p>
        Soy tambien un piloto de drone licenciado
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
