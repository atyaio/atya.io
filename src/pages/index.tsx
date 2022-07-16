import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex h-screen w-screen items-center justify-center gap-4'>
        <Button>Primary Button</Button>
        <Button variant='ghost'>Ghost Button</Button>
        <Button variant='light'>Light Button</Button>
        <Button variant='outline'>Outline Button</Button>
      </main>
    </Layout>
  );
}

// flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200
