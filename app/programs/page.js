import { programs } from '@data/data';
import { features } from '@data/data';

import ProgramCard from '@components/ProgramCard';
import ProgramFeatures from '@components/ProgramFeatures';
import ButtonPrimary from '@components/ButtonPrimary';

export const metadata = {
  title: 'Programs',
  description:
    'Information about the types of study programs offered by Sidra Coaching',
  keywords: 'coaching, programs, study',
};

function page() {
  return (
    <div className='px-4 pt-12 md:pt-20 md:px-10'>
      <div className=''>
        <h1 className='text-2xl font-bold md:text-4xl'>Programs We Offer</h1>
        <p className='mt-3 mb-6 md:mt-6 md:mb-10'>
          Choose the mode that fits your child: collaborative group classes
          in-person, or focused one-to-one online sessions.
        </p>
        <ButtonPrimary href='/contact' title='Book a Free Trial' />

        <div className='grid gap-6 md:gap-10 lg:gap-14 mt-14 md:mt-20 lg:grid-cols-2'>
          {programs?.map(programs => (
            <ProgramCard key={programs.method} program={programs} />
          ))}
        </div>
      </div>

      <ProgramFeatures features={features} />
    </div>
  );
}

export default page;
