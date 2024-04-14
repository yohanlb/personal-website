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
      <div className='absolute -z-10 inset-0 -m-2 bg-white bg-opacity-10 opacity-0 group-hover:opacity-100 rounded-lg'></div>
      <div className='flex justify-between gap-3'>
        <div className='w-16 shrink-0'>
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
              className='group-hover:underline underline-offset-2'
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
