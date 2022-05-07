import { CSSProperties, ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Page = ({ className, children, style }: PageProps) => (
  <div className={'h-90v w-full ' + className} style={style}>
    {children}
  </div>
);

export default Page;
