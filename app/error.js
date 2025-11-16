'use client';

function Error({ error, reset }) {
  return (
    <div className='flex flex-col items-center px-4 py-12 md:py-20 md:px-10'>
      <h1 className='mb-2 text-2xl font-semibold md:mb-4 md:text-4xl'>
        Something went wrong!
      </h1>
      <p className='mb-8'>{error.message}</p>
      <button
        className='px-6 py-2 text-white transition-all rounded-full md:px-8 md:py-3 bg-primary-700 hover:bg-primary-800'
        onClick={reset}
      >
        Try again!
      </button>
    </div>
  );
}

export default Error;
