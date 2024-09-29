import React from 'react';
import { EVENT_DATA } from '../../datas/eventsData';
import EventItem from '@components/homePage/EventItem';

const EventsSection = () => {
  return (
    <section>
      <h2 className='flex items-center gap-3'>
        <span className='h-[2px] w-14 bg-white' />
        <span className='text-2xl'>Events</span>
      </h2>
      <p className='mt-1 text-base font-light text-gray-500'>
        The next <strong>conferences</strong> and <strong>events</strong> you
        can find me at:
      </p>
      <ul className='mb-4 mt-6 flex flex-col gap-3 '>
        {EVENT_DATA.map((event) => (
          <EventItem key={event.title} event={event} />
        ))}
      </ul>
    </section>
  );
};

export default EventsSection;
