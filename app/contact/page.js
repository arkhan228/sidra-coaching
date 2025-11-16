import { SiGmail, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { sendEmail } from '@lib/actions';

import FormField from '@components/FormField';
import ButtonSubmit from '@components/ButtonSubmit';

export const metadata = {
  title: 'Contact',
  description: 'Ways to get in touch with Sidra Coaching',
  keywords: 'contact, email, phone, whatsapp',
};

function page() {
  return (
    <div className='px-4 pt-12 mx-auto md:w-4/5 xl:w-3/5 md:pt-20 md:px-10'>
      <h1 className='text-2xl font-bold md:text-4xl'>Contact</h1>
      <p className='mt-3 mb-6 md:mt-6 md:mb-10'>
        Contact us to discuss the best fit for your child. Fill the form below
        and we will get back to you as soon as possible.
      </p>
      <form action={sendEmail} className='mx-2 my-10 md:my-14'>
        <FormField type='text' name='name' placeholder='Enter your name' />
        <FormField type='email' name='email' placeholder='Your email' />
        <FormField
          type='text'
          name='subject'
          placeholder='Subject (Optional)'
          required={false}
        />
        <FormField
          type='textarea'
          name='message'
          placeholder='Tell us something about the subject'
        />
        <div className='flex justify-center'>
          <ButtonSubmit>Submit</ButtonSubmit>
        </div>
      </form>

      <div className='flex flex-col items-center justify-center'>
        <span className='font-bold text-accent-700'>OR</span>
        <ul className='px-12 py-6 mt-10 space-y-3 border rounded-lg border-accent-400'>
          <li className='flex items-center gap-4 md:gap-6'>
            <PhoneIcon
              title='Call'
              className='w-6 h-6 text-green-600 transition-colors hover:text-green-700'
            />
            <a
              href='tel:918278648970'
              className='font-medium hover:text-green-600'
            >
              Call us
            </a>
          </li>

          <li className='flex items-center gap-4 md:gap-6'>
            <SiGmail className='text-green-600 transition-colors hover:text-green-700' />
            <a
              href='mailto:sidracoachingcenter@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium hover:text-green-600'
            >
              Email us
            </a>
          </li>

          <li className='flex items-center gap-4 md:gap-6'>
            <SiWhatsapp className='text-green-600 transition-colors hover:text-green-700' />
            <a
              href='https://wa.me/918278648970'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-green-700 transition-all hover:bg-primary-800 text-white px-3 py-1.5 rounded-md'
            >
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
