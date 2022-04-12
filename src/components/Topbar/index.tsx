//Components
import Logo from '../Logo';
//Style
import './index.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <Logo />
      <a className="topbar__resume" href="#">
        Resume
      </a>
    </div>
  );
};

export default Topbar;
