import React from 'react';
import ExternalLinkIcon from '@components/ui/ExternalLinkIcon';
import { blogData } from '../../datas/blogData';
import { SOCIAL_LINKS } from '../../datas/socialLinkData';
import BlogItem from '@components/homePage/BlogItem';

const BlogSection = () => {
  return (
    <section>
      <h2 className='flex items-center gap-3'>
        <span className='h-[2px] w-14 bg-white' />
        <span className='text-2xl'>Articles</span>
      </h2>
      <ul className='mb-4 mt-6 flex flex-col gap-3 '>
        {blogData.map((blog) => (
          <BlogItem key={blog.title} blog={blog} />
        ))}
      </ul>
      {/* ------ Footer ----- */}
      <div className='flex items-center gap-1 text-sm font-extralight text-stone-400 '>
        <span className=''>More on my</span>
        <a
          href={SOCIAL_LINKS.Blog.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group hover:text-stone-200 '
        >
          <span className='underline underline-offset-4'>
            {SOCIAL_LINKS.Blog.displayName}
          </span>{' '}
          <ExternalLinkIcon />
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
