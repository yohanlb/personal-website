import React from 'react';
import { socialLinksData } from '@lib/socialLinkData';

const SocialLinks = () => {
  return (
    <ul className='flex gap-4'>
      {socialLinksData.map((linkData) => (
        <li
          key={linkData.displayName}
          className='underline underline-offset-4 text-stone-500 hover:text-white'
        >
          <a href={linkData.href} target='_blank' rel='noopener noreferrer'>
            {linkData.displayName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
