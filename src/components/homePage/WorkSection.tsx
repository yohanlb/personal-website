import React from 'react';
import { workData } from '../../datas/jobsData';
import WorkItem from '@components/homePage/WorkItem';
import ExternalLinkIcon from '@components/ui/ExternalLinkIcon';
import { SOCIAL_LINKS } from '../../datas/socialLinkData';

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
          href={SOCIAL_LINKS.LinkedIn.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group hover:text-stone-200'
        >
          <span className='underline underline-offset-4'>
            {SOCIAL_LINKS.LinkedIn.displayName}
          </span>{' '}
          <ExternalLinkIcon className='text-stone-400 group-hover:text-stone-200' />
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
