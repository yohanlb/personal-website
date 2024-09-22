import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  label: string;
  imageSrc: string;
  className?: string;
  link: string;
  isExternalLink: boolean;
};

const baseCardStyle =
  'group h-32 w-[100px] sm:h-44 sm:w-[150px] rounded-3xl bg-white bg-opacity-5 transition-all duration-100 hover:bg-opacity-10 ';
const boxShadowStyle = 'shadow-[8px_14px_10px_6px_#00000075]';
const boxShadowStyleHover = 'hover:shadow-[6px_10px_10px_2px_#00000075]';

const CardContent = ({ label, imageSrc, className }: Props) => {
  return (
    <div
      className={`${baseCardStyle} ${className} ${boxShadowStyle} ${boxShadowStyleHover}`}
    >
      <div className='flex h-full w-full flex-col items-center justify-center gap-5 duration-100 group-hover:scale-105'>
        <Image
          width={80}
          height={80}
          alt={label}
          src={imageSrc}
          className='h-auto w-12 sm:w-20'
        />
        <h3 className='text-lg font-light'>{label}</h3>
      </div>
    </div>
  );
};

const LinkCard = (Props: Props) => {
  if (Props.isExternalLink) {
    return (
      <a href={Props.link} target='_blank' rel='noopener noreferrer'>
        <CardContent {...Props} />
      </a>
    );
  }
  return (
    <Link href={Props.link}>
      <CardContent {...Props} />
    </Link>
  );
};

export default LinkCard;
