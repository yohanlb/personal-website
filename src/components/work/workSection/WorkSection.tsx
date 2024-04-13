import NewPageIcon from '@components/ui/NewPageIcon';
import { socialLinksData } from '@lib/socialLinkData';
import Image from 'next/image';
import React from 'react';

const WorkSection = () => {
  const workData = [
    {
      title: 'Frontend Engineer',
      company: 'Gorillas',
      years: '2022-2023',
      imgUrl: '/images/gorillas.jpeg',
    },
    {
      title: 'Frontend Engineer',
      company: 'Frichti',
      years: '2021-2023',
      imgUrl: '/images/frichti.jpeg',
    },
    {
      title: 'Full Stack Engineer',
      company: 'Novelab',
      years: '2021',
      imgUrl: '/images/novelab.jpeg',
    },
    {
      title: 'Creative Technologist',
      company: 'AC3 Studio / VR-Studio',
      years: '2017-2021',
      imgUrl: '/images/ac3.jpeg',
    },
  ];

  return (
    <section>
      <h2 className='flex items-center gap-3'>
        <span className=' w-14 h-[2px] bg-white' />
        <span className='text-2xl'>Work</span>
      </h2>
      <ul className='mt-6 mb-4 flex flex-col gap-3 '>
        {workData.map((job) => (
          <li key={job.company}>
            <div className='flex justify-between gap-3 '>
              <Image
                src={job.imgUrl}
                width={62}
                height={62}
                alt={job.company + ' logo'}
              />
              <div className='grow'>
                <h3 className='font-medium'>{job.title}</h3>
                <span className='font-extralight'>{job.company}</span>
              </div>
              <span className='font-light'>{job.years}</span>
            </div>
          </li>
        ))}
      </ul>
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
