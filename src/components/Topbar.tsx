import Logo from './Logo';

const Topbar = () => {
  return (
    <div className='bg-secondary shadow shadow-black flex items-center px-8 h-12'>
      <Logo />
      <a
        className='text-primary hover:text-white motion-safe:transition absolute right-8'
        href={process.env.PUBLIC_URL + 'Mattia-Fiorio-resume.pdf'}
      >
        See resume
      </a>
    </div>
  );
};

export default Topbar;
