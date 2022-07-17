import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <div className='flex h-full flex-wrap items-center justify-center gap-4'>
        <h1>Projects</h1>
      </div>
    </Layout>
  );
}
