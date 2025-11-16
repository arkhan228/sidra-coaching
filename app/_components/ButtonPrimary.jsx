import Link from 'next/link';

function ButtonPrimary({ href, title }) {
  return (
    <Link
      href={href}
      className='px-4 py-2 text-white transition-all rounded-lg md:py-3 md:px-6 bg-emerald-700 hover:bg-emerald-800'
    >
      {title}
    </Link>
  );
}

export default ButtonPrimary;
