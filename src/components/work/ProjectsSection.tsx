import NewPageIcon from '@components/ui/NewPageIcon';
import { projectsData } from '@lib/projectsData';
import { socialLinksData } from '@lib/socialLinkData';
import Image from 'next/image';
import React from 'react';
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
    </section>
  );
};

export default ProjectsSection;
