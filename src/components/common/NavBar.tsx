'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {};

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Work',
    href: '/work',
  },
];

const NavBar = (props: Props) => {
  const currentPath = usePathname();

  return (
    <nav className='flex gap-4 py-4'>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`group transition ${
            currentPath === link.href
              ? 'font-medium text-white'
              : 'font-extralight text-stone-300'
          }`}
        >
          <h2 className={`text-xl group-hover:text-white`}>{link.label}</h2>
          <span className='block h-0.5 max-w-0 bg-white transition-all duration-200 group-hover:max-w-full'></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
