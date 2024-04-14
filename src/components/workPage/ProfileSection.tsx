import Image from 'next/image';
import React from 'react';
import SocialLinks from './SocialLinks';

const ProfileSection = () => {
  return (
    <section>
      <div className='flex items-center gap-4'>
        <Image
          alt='Profil Picture'
          src={'/images/ProfilPicture128.png'}
          width={128}
          height={128}
        />
        <div>
          <h1 className='text-2xl font-medium'>Yohan Le Breton</h1>
          <div className='flex items-center gap-1'>
            <div className='h-3 w-3 rounded-full bg-green-400'></div>
            <span className='text-base font-light text-gray-400'>
              Available for hire
            </span>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <SocialLinks />
      </div>
    </section>
  );
};

export default ProfileSection;
