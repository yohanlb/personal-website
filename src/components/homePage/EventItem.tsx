import React from 'react';
import ExternalLinkIcon from '@components/ui/ExternalLinkIcon';
import { EventData } from '../../datas/eventsData';

type Props = {
  event: EventData;
};

const EventItem = ({ event }: Props) => {
  return (
    <li className='group relative rounded-lg'>
      {/* Hover background color effect */}
      <div className='absolute inset-0 -z-10 -m-2 rounded-lg bg-white bg-opacity-5 opacity-0 group-hover:opacity-100'></div>
      <div>
        <div className='flex items-center gap-2'>
          <p className={`text-sm font-normal text-stone-400`}>{event.date}</p>
          <span
            className={`rounded-full px-2 py-0.5 text-xs text-white ${event.isPast ? 'bg-gray-800 ' : 'bg-sky-800 '}`}
          >
            {event.isPast ? 'Past' : 'Upcoming'}
          </span>
        </div>
        <h3 className='text-base text-white'>
          <a
            href={event.link}
            className='underline-offset-2 group-hover:underline'
          >
            {event.title}
          </a>{' '}
          <span className='text-stone-400 '>
            <ExternalLinkIcon />
          </span>
        </h3>
      </div>
    </li>
  );
};

export default EventItem;
