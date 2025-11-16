'use client';

import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';

function ButtonSubmit({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='px-4 py-1 mt-10 text-white transition-all rounded-full shadow disabled:bg-primary-950 disabled:cursor-not-allowed md:py-2 md:px-6 bg-emerald-700 hover:bg-emerald-800'
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}

export default ButtonSubmit;
