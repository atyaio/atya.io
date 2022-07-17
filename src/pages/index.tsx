import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className='flex h-full flex-wrap items-center justify-center gap-4'>
        <Button>Primary Button</Button>
        <Button variant='ghost'>Ghost Button</Button>
        <Button variant='light'>Light Button</Button>
        <Button variant='outline'>Outline Button</Button>
      </div>
    </Layout>
  );
}
