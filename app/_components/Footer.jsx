import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { navLinks } from '@data/data';
import Logo from './Logo';

function Footer() {
  return (
    <footer className='flex flex-col mt-12 border-t border-gray-200 text-slate-600 md:mt-20 bg-gray-50'>
      <div className='grid grid-cols-2 gap-2 p-6 text-base xl:px-56 sm:gap-16 xl:gap-28 lg:text-lg sm:grid-cols-4'>
        <div className='flex items-center'>
          <Logo height={64} width={64} />
        </div>
        {/* Contact info */}
        <div className='flex flex-col'>
          <span className='mb-1 text-base font-medium md:text-lg '>
            Contact us
          </span>
          <p className='leading-relaxed'>
            Sidra Coaching <br />
            In-front of Jama Masjid <br /> Sherani Abad, 341302 <br /> +91 82786
            48970
          </p>
        </div>

        {/* Navigation */}
        <div className='flex flex-col'>
          <span className='mb-1 text-base font-medium md:text-lg '>Links</span>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className='transition-colors hover:text-green-700'
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className='flex flex-col gap-3'>
          <span className='mb-1 text-base font-medium md:text-lg text-slate-700'>
            Follow us
          </span>
          <a
            href='https://wa.me/918278648970'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-green-600'
          >
            <SiWhatsapp size={16} />
          </a>
          <a
            href='https://www.youtube.com/@Sidracoachingcenter'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-green-600'
          >
            <SiYoutube size={16} />
          </a>
          <a
            href='https://www.facebook.com/share/g/17VqZdyVfm/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-green-600'
          >
            <SiFacebook size={16} />
          </a>
          <a
            href='https://www.instagram.com/sidra_coaching_centre'
            target='_blank'
            rel='noreferrer'
            className='hover:text-green-600'
          >
            <SiInstagram size={16} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className='py-2 text-xs text-center border-t border-gray-200 md:text-sm text-slate-500'>
        © {new Date().getFullYear()} Sidra Coaching. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
