export interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card = ({ title, description, link }: CardProps) => {
  return (
    <a
      href={link}
      className='bg-secondary hover:bg-sHover motion-safe:transition rounded-xl shadow-md shadow-black p-4 flex '
    >
      <div>
        <p className='text-xl font-medium text-primary pb-2'>{title}</p>
        <p className='text-gray-100'>{description}</p>
      </div>
    </a>
  );
};

export default Card;
