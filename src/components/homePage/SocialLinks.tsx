import React from 'react';
import { getSocialLinksArray } from '../../datas/socialLinkData';
import ExternalLinkIcon from '@components/ui/ExternalLinkIcon';

const SocialLinks = () => {
  const socialLinksData = getSocialLinksArray();

  return (
    <ul className='flex gap-4'>
      {socialLinksData.map((linkData) => (
        <li
          key={linkData.displayName}
          className='group text-stone-500 hover:text-white'
        >
          <a
            href={linkData.href}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4'
          >
            {linkData.displayName}
          </a>{' '}
          <ExternalLinkIcon />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
