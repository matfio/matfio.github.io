import Logo from './Logo';

const Topbar = () => {
  return (
    <div className='bg-secondary shadow shadow-black flex items-center top-0 w-full fixed z-10 h-16'>
      <Logo className='lg:pl-8 pl-4' />
      <a
        className='text-primary hover:text-white motion-safe:transition absolute lg:right-8 right-4 text-lg'
        href={process.env.PUBLIC_URL + 'Mattia-Fiorio-resume.pdf'}
      >
        See resume
      </a>
    </div>
  );
};

export default Topbar;
