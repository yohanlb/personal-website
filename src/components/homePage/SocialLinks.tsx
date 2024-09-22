import React from 'react';
import { getSocialLinksArray } from '../../datas/socialLinkData';

const SocialLinks = () => {
  const socialLinksData = getSocialLinksArray();

  return (
    <ul className='flex gap-4'>
      {socialLinksData.map((linkData) => (
        <li
          key={linkData.displayName}
          className='text-stone-500 underline underline-offset-4 hover:text-white'
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
