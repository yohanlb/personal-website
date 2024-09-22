import SocialLinks from '@components/homePage/SocialLinks';
import Image from 'next/image';
import React from 'react';

const IntroSection = () => {
  return (
    <section>
      <div className='w-full'>
        <Image
          alt='Profil Picture'
          src={'/images/ProfilPicture256.png'}
          width={156}
          height={156}
          priority={true}
          className='m-auto'
        />
      </div>
      <div className='mt-8 flex flex-col gap-4'>
        <h2 className='text-xl'>Hey, I’m Yohan 👋🏼</h2>
        <p className='font-extralight'>
          I am a <strong>Software Engineer</strong> and{' '}
          <strong>Creative Technologist</strong> who loves creating beautiful
          highly interactive web apps.
        </p>
        <p className='font-extralight'>
          Previously front-end engineer at <strong>@frichti</strong> and{' '}
          <strong>@gorillas</strong>. I am currently focusing on some fun side
          projects (To be released soon! 🚀🎉).
        </p>
        <p className='font-extralight'>
          I am also a passionate Photographer and Videographer on my spare time
          📸.
        </p>
      </div>
      <div className='mt-4'>
        <SocialLinks />
      </div>
    </section>
  );
};

export default IntroSection;
