import { CSSProperties, ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Page = ({ className, children, style }: PageProps) => (
  <div className={'min-h-90v mt-16 ' + className} style={style}>
    {children}
  </div>
);

export default Page;
