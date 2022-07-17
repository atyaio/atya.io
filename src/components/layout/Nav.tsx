import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { useMediaQuery } from 'usehooks-ts';

import clsxm from '@/lib/clsxm';
import useShowNavbar from '@/hooks/useShowNavbar';

import ButtonLink from '@/components/links/ButtonLink';

const Nav = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const isMobile = useMediaQuery('(max-width: 639px)');
  const showNavbar = useShowNavbar();
  const { asPath } = useRouter();

  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/projects',
      label: 'Projects',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <nav
      className={clsxm(
        'sticky top-0 flex flex-col items-center justify-between sm:flex-row sm:px-8',
        showNavbar &&
          !isMobile &&
          'bg-gray-900 bg-opacity-70 backdrop-blur-md backdrop-saturate-150'
      )}
    >
      <div
        className={clsxm(
          'flex w-full items-center justify-between py-4',
          isMobile &&
            'bg-gray-900 bg-opacity-90 px-8 backdrop-blur-md backdrop-saturate-150'
        )}
      >
        <Link href='/'>
          <a>
            <h3 className='text-2xl'>AA.</h3>
          </a>
        </Link>
        <button
          className='sm:hidden'
          onClick={() => setShowMobileDropdown((b) => !b)}
        >
          <BiMenu className='h-7 w-7 fill-white' />
        </button>
      </div>
      <ul
        className={clsxm(
          'flex w-full translate-y-6 flex-col items-center gap-4 py-2 text-sm opacity-0 transition-all duration-300 sm:mt-0 sm:w-auto sm:translate-y-0 sm:flex-row sm:rounded-lg sm:bg-transparent sm:opacity-100 sm:backdrop-blur-0',
          isMobile &&
            'pointer-events-none absolute top-full right-0 z-10 bg-gray-900 bg-opacity-70 px-4 backdrop-blur-md backdrop-saturate-150',
          showMobileDropdown && 'pointer-events-auto translate-y-0 opacity-100'
        )}
      >
        {links.map((link) => (
          <li key={link.href} className='w-full sm:w-auto'>
            <ButtonLink
              className='w-full rounded-sm py-2 px-3 sm:w-auto'
              href={link.href}
              active={asPath === link.href}
              variant='ghost'
              noHoverEffect
            >
              {link.label}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
