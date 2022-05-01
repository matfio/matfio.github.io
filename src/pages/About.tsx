const About = () => {
  return (
    <div className='h-80v grid place-items-center'>
      <div className='absolute p-4 bg-secondary/50 rounded-xl shadow-md shadow-black/50 flex-row'>
        <div className='font-rubik text-5xl text-primary text-center'>
          Mattia Fiorio
        </div>
        <div className='font-rubik text-5xl text-white text-center'>
          Software developer
        </div>
        <div className='font-rubik text-5xl text-orange-500 text-center'>
          Website in progress!
        </div>
      </div>
      <img
        className='h-full object-cover object-center'
        src={process.env.PUBLIC_URL + '/img/singapore.jpg'}
        alt='picture of me'
      />
    </div>
  );
};

export default About;
