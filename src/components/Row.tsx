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
        <div className='lg:text-right lg:block text-center flex flex-col items-center'>
          <img className='max-h-xs max-w-xs lg:my-4 lg:ml-auto' src={imgSrc} />
          <div className='lg:ml-auto'>
            <h2 className='break-all'>{title}</h2>
            <div>{date}</div>
            <div>{subTitle}</div>
          </div>
        </div>
        <div className='lg:mt-0 mt-4 col-span-2'>{children}</div>
      </div>
    </div>
  );
};

export default Row;
