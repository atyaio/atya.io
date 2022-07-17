import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

const Nav = () => {
  const [showNavbarBlur, setShowNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      (e.currentTarget as Window).scrollY > 20
        ? setShowNavbarBlur(true)
        : setShowNavbarBlur(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsxm(
        'sticky top-0 flex items-center justify-between bg-gray-900 bg-opacity-10 py-4 px-6',
        showNavbarBlur && 'backdrop-blur-md backdrop-saturate-150'
      )}
    >
      <h3 className='text-white'>AA.</h3>
      <ul className='flex items-center gap-4 text-sm text-white'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
