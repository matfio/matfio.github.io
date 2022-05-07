import Page from '../components/Page';

const About = () => {
  return (
    <Page
      className='bg-no-repeat bg-cover bg-right-top bg-fixed lg:min-h-90v min-h-50v flex items-center justify-center'
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/img/swizerland.jpg'
        })`,
      }}
    >
      <div className='h-full flex'>
        <h1 className='relative text-primary pr-2 z-10'>
          Hej! I'm
          <h1 className='absolute pr-2 pt-1 w-full'>Hej! I'm</h1>
        </h1>
        <h1 className='ml-2 text-primary'>
          Mattia <h1 className='absolute text-orange-500 pr-2 pt-1'>Mattia</h1>
        </h1>
      </div>
    </Page>
  );
};

export default About;
