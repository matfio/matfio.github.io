import Page from '../components/Page';

const About = () => {
  return (
    <Page
      className='bg-no-repeat bg-cover bg-right-top bg-fixed sm:min-h-90v min-h-50v flex items-center justify-center'
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/img/swizerland.jpg'
        })`,
      }}
    >
      <div className='h-full flex'>
        <h1 className=''>Hej! I'm</h1>
        <h1 className='ml-2 text-orange-500 '> Mattia</h1>
      </div>
    </Page>
  );
};

export default About;
