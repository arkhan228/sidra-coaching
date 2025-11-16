import ButtonPrimary from '@components/ButtonPrimary';

function page() {
  return (
    <div className='flex flex-col items-center px-4 py-12 md:py-20 md:px-10'>
      <h1 className='mb-2 text-2xl font-bold md:text-2xl md:mb-4'>
        Thank you for reaching out to us!
      </h1>
      <p className='mb-8'>We will get back to you as soon as possible</p>
      <ButtonPrimary href='/' title='Back to Home' />
    </div>
  );
}

export default page;
