import React, { ReactNode } from 'react';

import Head from 'next/head';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'This is the default title' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href='/about'>
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href='/users'>
            <a>Users List</a>
          </Link>{' '}
          | <a href='/api/users'>Users API</a>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>Soy el footer 👌</span>
      </footer>
    </div>
  );
}

export default Layout;
