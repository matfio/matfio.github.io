import Page from '../components/Page';

const About = () => {
  return (
    <Page
      className='bg-no-repeat bg-cover bg-right-top bg-fixed'
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/img/swizerland.jpg'
        })`,
      }}
    >
      <div className='absolute w-full h-full flex justify-center flex-col align-middle'>
        <h1 className=' m-4 '>Mattia Fiorio</h1>
        <h1 className=' text-primary m-4'>Software developer</h1>
        <h2 className=' text-orange-500 m-4 flex justify-center'>
          Website in progress!
        </h2>
      </div>
    </Page>
  );
};

export default About;
