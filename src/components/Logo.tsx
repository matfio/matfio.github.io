export interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={
        'text-primary font-rubik cursor-default sm:text-3xl text-6xl ' +
        className
      }
    >
      MF
    </div>
  );
};

export default Logo;
