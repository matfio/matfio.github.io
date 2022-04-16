import './index.css';

interface LayoutProps {
    title?: string;
    description?: string;
  }

const Card: React.FC<LayoutProps> = ({title, description}) =>(
  <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
  </div>);

export default Card;
