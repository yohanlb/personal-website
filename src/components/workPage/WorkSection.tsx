import NewPageIcon from '@components/ui/NewPageIcon';
import { workData } from '@lib/jobsData';
import { socialLinksData } from '@lib/socialLinkData';
import Image from 'next/image';
import React from 'react';
import WorkItem from '@components/workPage/WorkItem';

const WorkSection = () => {
  return (
    <section>
      <h2 className='flex items-center gap-3'>
        <span className=' h-[2px] w-14 bg-white' />
        <span className='text-2xl'>Work</span>
      </h2>
      {/* ------ Content ----- */}
      <ul className='mb-4 mt-6 flex flex-col gap-3'>
        {workData.map((job) => (
          <WorkItem key={job.company} job={job} />
        ))}
      </ul>
      {/* ------ Footer ----- */}
      <div className='flex items-center gap-1 text-sm font-extralight text-stone-400'>
        <span className=''>More on </span>
        <a
          href='https://www.linkedin.com/in/yohanlb/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-4 hover:text-stone-200'
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
