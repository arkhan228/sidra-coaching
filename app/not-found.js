import ButtonPrimary from '@components/ButtonPrimary';

function NotFound() {
  return (
    <div className='flex flex-col items-center px-4 py-12 md:py-20 md:px-10'>
      <h1 className='mb-2 text-2xl font-semibold md:mb-4 md:text-4xl'>
        Page Not Found
      </h1>
      <p className='mb-8'>The page you are looking for does not exist</p>
      <ButtonPrimary href='/' title='Back to Home' />
    </div>
  );
}

export default NotFound;
