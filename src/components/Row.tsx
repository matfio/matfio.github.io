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
    <div className='w-full rounded-sm shadow-md p-4 m-4 flex justify-center align-middle'>
      <div className='grid grid-cols-3 gap-16'>
        <div className='text-right pl-12'>
          <img className='max-w-3xs mb-4 ml-auto' src={imgSrc} />
          <h2>{title}</h2>
          <div>{date}</div>
          <div>{subTitle}</div>
        </div>
        <div className='col-span-2 pr-12'>{children}</div>
      </div>
    </div>
  );
};

export default Row;
