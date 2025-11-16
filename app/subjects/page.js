import { subjects } from '../_data/data';

export const metadata = {
  title: 'Subjects',
  description: 'Subjects',
};

function page() {
  return (
    <div className='px-4 pt-12 md:pt-20 md:px-10'>
      <h1 className='text-2xl font-bold md:text-4xl '>Subjects We Teach</h1>
      <p className='mt-3 mb-6 md:mt-6 md:mb-10'>
        Strong academics with a values‑first approach. We offer secular subjects
        and faith learning with equal respect and care.
      </p>
      <div className='grid gap-6 px-4 mt-10 md:mt-16 md:px-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {subjects.map(s => (
          <div
            key={s.name}
            className='p-6 border shadow rounded-3xl border-amber-200 bg-amber-50'
          >
            <h2 className='text-xl font-bold text-emerald-800'>{s.name}</h2>
            <p className='mt-2 text-sm'>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
