import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './404.module.css';

const NotFoundPage = () => (
  <main className={styles.container}>
    <title>Not found</title>
    <div>
      <h1>Page not found</h1>
      <p>
        Sorry
        {' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        {' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in
            {' '}
            <code>src/pages/</code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>
        .
      </p>
    </div>
  </main>
);

export default NotFoundPage;
