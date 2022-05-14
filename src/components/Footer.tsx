const Footer = () => (
  <footer className='text-primary bg-secondary w-full h-16 flex flex-row justify-center align-center items-center gap-2'>
    See you on
    <a
      className='text-primary text-lg'
      href='https://www.linkedin.com/in/mttfiorio/'
    >
      <img
        className='w-10 h-10 rounded-md hover:w-12 hover:h-12 transition-all'
        src={process.env.PUBLIC_URL + '/logos/linkedin.webp'}
      ></img>
    </a>
  </footer>
);

export default Footer;
