export interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={'text-primary font-rubik cursor-default text-3xl ' + className}
    >
      MF
    </div>
  );
};

export default Logo;
