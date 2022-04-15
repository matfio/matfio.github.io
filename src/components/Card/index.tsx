interface LayoutProps {
    title?: string;
    description?: string;
  }

const Card: React.FC<LayoutProps> = ({title, description}) => <div>
    <title>{title}</title>
    <div>{description}</div>
</div>;

export default Card;
