export type EventData = {
  title: string;
  date: string;
  link: string;
  isPast?: boolean;
};

export const EVENT_DATA: EventData[] = [
  {
    date: '19/09/22',
    title: 'Building for Everyone, Accessibility at Google - Paris',
    link: 'https://gdg.community.dev/events/details/google-gdg-paris-presents-building-for-everyone-at-google-paris/',
    isPast: true,
  },
  {
    date: '02/11/23',
    title: 'Performance.now(), The web performance conference - Amsterdam',
    link: 'https://perfnow.nl/2023#:~:text=On%202nd%20and%203rd%20of,most%20important%20web%20performance%20insights.',
    isPast: true,
  },
  {
    title: 'React Advanced - London',
    date: '25/10/24',
    link: 'https://reactadvanced.com/',
    isPast: true,
  },
  {
    title: 'React Summit - New York',
    date: '19/11/24',
    link: 'https://reactsummit.us/',
    isPast: true,
  },
];
