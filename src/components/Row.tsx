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
    <div className='md:rounded-sm md:shadow-md flex justify-center items-center my-4 py-4'>
      <div className='grid sm:grid-cols-3 sm:gap-16 grid-cols-1'>
        <div className='text-right sm:block grid grid-cols-3'>
          <img
            className='max-h-3xs max-w-3xs h-auto sm:my-4 sm:ml-auto'
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
