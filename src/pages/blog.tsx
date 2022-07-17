import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function BlogPage() {
  return (
    <Layout>
      <Seo templateTitle='Blog' />

      <div className='flex h-full flex-wrap items-center justify-center gap-4'>
        <h1>Blog</h1>
      </div>
    </Layout>
  );
}
