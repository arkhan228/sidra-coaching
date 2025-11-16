import Image from 'next/image';
import heroImage from '../public/hero.png';
import Link from 'next/link';
import ButtonPrimary from '@components/ButtonPrimary';

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-12 lg:flex-row'>
      <div className='mx-4 mb-2 md:mx-10 md:my-12'>
        <h1 className='mb-6 text-2xl font-bold md:text-4xl xl:text-5xl'>
          Learning that builds <span className='text-primary-600'>skills</span>{' '}
          and <span className='text-primary-600'>character</span>{' '}
        </h1>
        <p>
          Welcome to <span className='font-semibold'>Sidra Coaching</span>, a
          unique learning platform that blends academic excellence with
          character development.
        </p>
        <div className='flex flex-col items-start gap-4 mt-4 md:items-center md:flex-row lg:flex-col lg:items-start xl:flex-row xl:items-center'>
          <ButtonPrimary href='/contact' title='Book a Free Trial' />
          <Link
            href='programs'
            className='px-2 ml-0.5 py-0.5 border-accent-950 rounded-md border hover:border-accent-900 hover:text-accent-900 transition-all'
          >
            Explore Programs
          </Link>
        </div>
      </div>
      <div className='px-0.5'>
        <Image
          src={heroImage}
          width={heroImage.width}
          height={heroImage.height}
          placeholder='blur'
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover rounded'
          alt='Sidra Coaching building'
        />
      </div>
    </div>
  );
}
