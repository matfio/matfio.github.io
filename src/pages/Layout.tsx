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
      <div className="pages">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Layout;
