import * as React from 'react';

import Nav from '@/components/layout/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto flex min-h-screen max-w-7xl flex-col'>
      <Nav />
      <main className='flex-1 p-4'>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
