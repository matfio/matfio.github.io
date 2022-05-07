import { ReactNode } from 'react';

export interface RowProps {
  children?: ReactNode;
}

const Row = ({ children }: RowProps) => {
  return <div className='rounded-sm shadow-md p-4 m-4 flex'>{children}</div>;
};

export default Row;
