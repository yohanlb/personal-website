import React from 'react';
import Image from 'next/image';
import { ProjectData } from '@lib/projectsData';

interface ProjectItemProps {
  project: ProjectData;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <li key={project.title} className='group relative rounded-lg'>
      {/* Hover background color effect */}
      <div className='absolute inset-0 -z-10 -m-2 rounded-lg bg-white bg-opacity-5 opacity-0 group-hover:opacity-100'></div>
      <div className='flex justify-between gap-3'>
        <div className='w-16 shrink-0 overflow-hidden rounded-md'>
          <Image
            src={project.imgUrl}
            width={64}
            height={64}
            alt={project.title}
          />
        </div>
        <div className='grow'>
          <h3 className='default-h3'>
            <a
              href={project.link}
              target='_blank'
              className='underline-offset-2 group-hover:underline'
            >
              {project.title}
            </a>
          </h3>
          <p className='default-description'>{project.description}</p>
          {project.description2 && (
            <p className='default-description'>{project.description2}</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
