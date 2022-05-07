import Logo from './Logo';

const Topbar = () => {
  return (
    <div className='bg-secondary shadow shadow-black flex items-center top-0 w-full fixed z-10 sm:h-12 h-24'>
      <Logo className='sm:pl-8 pl-4' />
      <a
        className='text-primary hover:text-white motion-safe:transition absolute sm:right-8 right-4 sm:text-lg text-2xl'
        href={process.env.PUBLIC_URL + 'Mattia-Fiorio-resume.pdf'}
      >
        See resume
      </a>
    </div>
  );
};

export default Topbar;
