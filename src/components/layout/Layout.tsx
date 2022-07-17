import * as React from 'react';

import Nav from '@/components/layout/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Nav />
      <main className='flex-1'>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
