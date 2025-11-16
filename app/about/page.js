import Image from 'next/image';
import about from '../../public/about.png';
import ButtonPrimary from '@components/ButtonPrimary';

export const metadata = {
  title: 'About',
  description:
    'More information about Sidra Coaching; what we aim to do, our vision and mission.',
};

function page() {
  return (
    <div className='px-4 pt-12 md:pt-20 md:px-10'>
      <div className='grid items-center gap-6 lg:grid-cols-2'>
        <h1 className='mb-4 text-2xl font-bold md:mb-8 lg:col-span-full md:text-4xl'>
          Nurturing Mind, Shaping Character
        </h1>
        <Image
          src={about}
          placeholder='blur'
          priority
          sizes='(max-width: 768px) 70vw, 100vw'
          className='object-cover px-8 rounded-lg lg:px-0 xl:w-120 justify-self-center w-96'
          alt='Teacher observing students'
        />
        <p className=''>
          Sidra Coaching isn’t just another tutoring center — it’s a community
          of learning, respect, and growth. Founded with the vision to offer
          children more than classroom memorization, Sidra focuses on{' '}
          <span className='italic'>hands-on learning </span>
          and <span className='italic'>value-based education</span>.
        </p>
        <p className='lg:col-span-full lg:mt-4'>
          We believe education should build both <span>skills </span> and
          <span> character</span>. Our students not only master subjects like
          English and Mathematics but also learn social, moral, and family
          values that prepare them for life.
        </p>
      </div>

      <div className='grid gap-6 px-4 mt-12 md:mt-16 lg:gap-14 md:gap-10 sm:grid-cols-2 lg:mt-20'>
        <div className='px-6 py-4 border rounded-xl border-accent-400'>
          <h2 className='mb-3 font-bold tracking-wider text-md md:text-2xl text-accent-700'>
            VISION
          </h2>
          <p className='md:leading-normal'>
            To nurture children into confident, responsible, and curious
            individuals by providing an education that combines academic rigor
            with moral and social values.
          </p>
        </div>

        <div className='px-6 py-4 border rounded-xl border-accent-400'>
          <h2 className='mb-3 font-bold tracking-wider text-md md:text-2xl text-accent-700'>
            MISSION
          </h2>
          <p className='md:leading-normal'>
            To provide accessible, high-quality coaching that: - Strengthens{' '}
            <span className='italic'>academic foundations</span> through
            interactive, concept-based teaching. - Instills
            <span className='italic'> moral, social, and family values</span> in
            every lesson. - Encourages{' '}
            <span className='italic'>hands-on learning</span> through projects,
            storytelling, and real-life examples.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <ButtonPrimary href='/programs' title='Explore Programs' />
      </div>
    </div>
  );
}

export default page;
