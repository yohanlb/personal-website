import Image from 'next/image';
import React from 'react';

const NewPageIcon = () => {
  return (
    <span className='inline-block '>
      <Image
        width={10}
        height={10}
        src={'/images/newPageIcon.svg'}
        alt='new page'
      />
    </span>
  );
};

export default NewPageIcon;
