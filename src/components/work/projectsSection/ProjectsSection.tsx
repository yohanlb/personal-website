import NewPageIcon from '@components/ui/NewPageIcon';
import { socialLinksData } from '@lib/socialLinkData';
import Image from 'next/image';
import React from 'react';

const ProjectsSection = () => {
  const projectsData = [
    {
      title: 'Geo Quiz (Work in Progress)',
      description: 'Full Stack geography trivia/quiz app',
      link: 'https://geoquiz.co',
      imgUrl: '/images/GeoQuizLogo.png',
    },
    {
      title: 'Santos de Cartier Event',
      description:
        "Interactive installation for Cartier's 100th anniversary in Shanghai.",
      description2: 'In collaboration with: Cartier, K2 Agency, AC3 Studio.',
      link: 'https://ac3-studio.com/works/cartier-santos',
      imgUrl: '/images/cartier.png',
    },
  ];

  return (
    <section>
      <h2 className='flex items-center gap-3'>
        <span className='w-14 h-[2px] bg-white' />
        <span className='text-2xl'>Projects</span>
      </h2>
      <ul className='mt-6 mb-4 flex flex-col gap-3 '>
        {projectsData.map((project) => (
          <li key={project.title}>
            <div className='flex justify-between gap-3 '>
              <div className='w-16'>
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
                    className='hover:underline underline-offset-2'
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
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
