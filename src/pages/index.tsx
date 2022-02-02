import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// -> Select and CMD + SHIFT + F
// Before you begin editing, follow all comments with ``,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-dark text-gray-200'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/logo.png'
              width='500'
              height='500'
              alt='Logo'
            />
            <h1 className='mt-8'>Crafting Digital Products</h1>
            <footer className='absolute bottom-2 mb-4 text-gray-500'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://bukan.dev'>Bukan Dev</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
