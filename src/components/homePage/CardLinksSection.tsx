import React from 'react';
import LinkCard from './LinkCard';

const CardLinksSection = () => {
  return (
    <section className='flex justify-between'>
      <LinkCard
        label='Connect'
        imageSrc='/images/home/linkedin.svg'
        link='https://www.linkedin.com/in/yohanlb/'
        isExternalLink={true}
        className={'relative top-6'}
      />
      <LinkCard
        label='Work'
        imageSrc='/images/home/laptop.svg'
        link='/work'
        isExternalLink={false}
      />
      <LinkCard
        label='Photos'
        imageSrc='/images/home/camera.svg'
        link='https://www.instagram.com/yohlb/'
        isExternalLink={true}
        className={'relative top-6'}
      />
    </section>
  );
};

export default CardLinksSection;
