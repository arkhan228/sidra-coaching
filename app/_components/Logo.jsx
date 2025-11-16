import Image from 'next/image';
import logo from '../../public/logo.png';

function Logo({ width = 48, height = 48 }) {
  return (
    <div>
      <Image
        src={logo}
        placeholder='blur'
        priority
        className='object-cover'
        width={width}
        height={height}
        alt='Logo Sidra Coaching'
      />
    </div>
  );
}

export default Logo;
