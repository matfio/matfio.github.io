import { ReactNode } from 'react';

export interface RowProps {
  title: string;
  subTitle?: string;
  date?: string;
  imgSrc?: string;
  children?: ReactNode;
}

const Row = ({ title, subTitle, date, imgSrc, children }: RowProps) => {
  return (
    <div className='lg:rounded-sm lg:shadow-md flex justify-center items-center my-4 py-4'>
      <div className='grid lg:grid-cols-3 lg:gap-16 grid-cols-1'>
        <div className='text-right lg:block grid grid-cols-3'>
          <img
            className='max-h-3xs max-w-3xs h-auto lg:my-4 lg:ml-auto'
            src={imgSrc}
          />
          <div className='ml-auto col-span-2'>
            <h2 className='break-all'>{title}</h2>
            <div>{date}</div>
            <div>{subTitle}</div>
          </div>
        </div>
        <div className='col-span-2'>{children}</div>
      </div>
    </div>
  );
};

export default Row;
