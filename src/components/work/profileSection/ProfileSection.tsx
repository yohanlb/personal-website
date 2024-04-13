import Image from 'next/image';
import React from 'react';

const ProfileSection = () => {
  return (
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
          <div className='rounded-full bg-green-400 w-3 h-3'></div>
          <span className='text-base font-normal text-gray-400'>
            Available for hire
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
