import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Homepage' />
      <div className='flex h-full flex-wrap items-center justify-center gap-4'>
        <section className='w-full rounded-lg bg-gradient-to-tl from-primary-700 to-primary-600 py-6 px-4 shadow-sm'>
          <h2>Homepage</h2>
        </section>
        {/* <Button>Primary Button</Button>
        <Button variant='ghost'>Ghost Button</Button>
        <Button variant='light'>Light Button</Button>
        <Button variant='outline'>Outline Button</Button> */}
      </div>
    </Layout>
  );
}
