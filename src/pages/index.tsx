import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Homepage' />
      <div className='flex h-full flex-wrap items-center justify-center gap-4'>
        <h1 className='text-white'>Homepage</h1>
        {/* <Button>Primary Button</Button>
        <Button variant='ghost'>Ghost Button</Button>
        <Button variant='light'>Light Button</Button>
        <Button variant='outline'>Outline Button</Button> */}
      </div>
    </Layout>
  );
}
