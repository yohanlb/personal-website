import React from 'react';
import Image from 'next/image';
import { JobData } from '../../datas/jobsData';

type Props = {
  job: JobData;
};

const WorkItem = ({ job }: Props) => {
  return (
    <li key={job.company} className='group relative rounded-lg'>
      {/* Hover background color effect */}
      <div className='absolute inset-0 -z-10 -m-2 rounded-lg bg-white bg-opacity-5 opacity-0 group-hover:opacity-100'></div>
      <div className='flex justify-between gap-3'>
        <div className='w-16 shrink-0'>
          <Image
            src={job.imgUrl}
            width={64}
            height={64}
            alt={job.company + ' logo'}
          />
        </div>
        <div className='-mt-[4px] grow'>
          <h3 className='default-h3'>{job.title}</h3>
          <span className='default-subtitle'>{job.company}</span>
        </div>
        <span className='font-light'>{job.years}</span>
      </div>
    </li>
  );
};

export default WorkItem;
