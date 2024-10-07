export type JobData = {
  title: string;
  company: string;
  years: string;
  imgUrl: string;
};

export const workData: JobData[] = [
  {
    title: 'Web Engineer',
    company: 'Frichti',
    years: '2021-2024',
    imgUrl: '/images/work/frichti.jpeg',
  },
  {
    title: 'Web Engineer',
    company: 'Gorillas',
    years: '2022-2023',
    imgUrl: '/images/work/gorillas.jpeg',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Novelab',
    years: '2020-2021',
    imgUrl: '/images/work/novelab.jpeg',
  },
  {
    title: 'Full Stack Engineer / Creative Technologist',
    company: 'AC3 Studio / VR-Studio',
    years: '2017-2021',
    imgUrl: '/images/work/ac3.png',
  },
];
