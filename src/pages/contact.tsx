import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactPage() {
  return (
    <Layout>
      <Seo templateTitle='Contact' />
      <div className='flex h-full flex-wrap items-center justify-center gap-4'>
        <h1>Contact</h1>
      </div>
    </Layout>
  );
}
