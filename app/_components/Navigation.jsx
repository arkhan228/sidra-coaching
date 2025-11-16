'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navLinks } from '@data/data';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  });

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          menuOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        } nav-bar`}
        area-label='Main Navigation'
      >
        {navLinks.map(({ label, href }) => {
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-1 transition-all ${href === '/contact' ? 'text-white rounded-md bg-primary-700 hover:bg-primary-800 px-4' : 'hover:text-primary-900 px-2'}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <button
        ref={buttonRef}
        type='button'
        aria-label='Menu Toggle'
        className='cursor-pointer lg:hidden'
        aria-expanded={menuOpen}
        area-controls='site-menu'
        aria-haspopup='menu'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className='w-6 h-6 md:w-10 md:h-10' />
        ) : (
          <Bars3Icon className='w-6 h-6 md:h-10 md:w-10' />
        )}
      </button>
    </>
  );
}

export default Navigation;
