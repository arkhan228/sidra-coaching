import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between h-16 px-6 border-b shadow-sm md:px-8 md:h-20 border-b-white text-primary-700 lg:px-12 backdrop-blur bg-white/80'>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
