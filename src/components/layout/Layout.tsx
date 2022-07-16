import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col bg-gray-900'>
      <nav className='sticky top-0 flex items-center justify-between bg-black bg-opacity-10 py-4 px-6 backdrop-blur-md backdrop-saturate-150'>
        <h3 className='text-white'>Logo</h3>
        <ul>Menu</ul>
      </nav>
      <main className='flex-1'>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
