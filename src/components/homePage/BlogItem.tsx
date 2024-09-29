import React from 'react';
import { BlogData } from '../../datas/blogData';
import ExternalLinkIcon from '@components/ui/ExternalLinkIcon';

type Props = {
  blog: BlogData;
};

const BlogItem = ({ blog }: Props) => {
  return (
    <li className='group relative rounded-lg'>
      {/* Hover background color effect */}
      <div className='absolute inset-0 -z-10 -m-2 rounded-lg bg-white bg-opacity-5 opacity-0 group-hover:opacity-100'></div>
      <div>
        <h3 className='text-base text-white'>
          <a
            href={blog.link}
            target='_blank'
            className='underline-offset-2 group-hover:underline'
          >
            {blog.title}
          </a>{' '}
          <span className='text-stone-400 '>
            <ExternalLinkIcon />
          </span>
        </h3>
        <p className='mb-2 text-sm font-extralight text-stone-300'>
          {blog.subtitle}
        </p>
        <p className='text-xs text-black'>
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className='mb-2 mr-2 inline-block rounded-full bg-stone-300 px-2 py-0.5'
            >
              {tag}
            </span>
          ))}
        </p>
      </div>
    </li>
  );
};

export default BlogItem;
