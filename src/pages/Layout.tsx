//Components
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
//Pages
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const Layout = () => {
  return (
    <div className="Layout">
      <Topbar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Layout;
