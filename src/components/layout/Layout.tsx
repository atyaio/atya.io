import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className='bg-gray-900'>{children}</main>;
}
