import React from 'react';
import ExternalLinkIcon from '@components/ui/ExternalLinkIcon';
import { projectsData } from '../../datas/projectsData';
import { SOCIAL_LINKS } from '../../datas/socialLinkData';
import ProjectItem from './ProjectItems';

const ProjectsSection = () => {
  return (
    <section>
      <h2 className='flex items-center gap-3'>
        <span className='h-[2px] w-14 bg-white' />
        <span className='text-2xl'>Projects</span>
      </h2>
      <ul className='mb-4 mt-6 flex flex-col gap-3 '>
        {projectsData.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
      {/* ------ Footer ----- */}
      <div className='flex items-center gap-1 text-sm font-extralight text-stone-400 '>
        <span className=''>More on </span>
        <a
          href={SOCIAL_LINKS.Behance.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group hover:text-stone-200 '
        >
          <span className='underline underline-offset-4'>
            {SOCIAL_LINKS.Behance.displayName}
          </span>{' '}
          <ExternalLinkIcon />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
