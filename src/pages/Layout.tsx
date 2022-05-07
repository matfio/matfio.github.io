//Components
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
//Pages
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const Layout = () => {
  return (
    <div className='font-poppins sm:mt-12 mt-24'>
      <Topbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Layout;
