export type JobData = {
  title: string;
  company: string;
  years: string;
  imgUrl: string;
};

export const workData: JobData[] = [
  {
    title: 'Frontend Engineer',
    company: 'Gorillas',
    years: '2022-2023',
    imgUrl: '/images/work/gorillas.jpeg',
  },
  {
    title: 'Frontend Engineer',
    company: 'Frichti',
    years: '2021-2023',
    imgUrl: '/images/work/frichti.jpeg',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Novelab',
    years: '2021',
    imgUrl: '/images/work/novelab.jpeg',
  },
  {
    title: 'Creative Technologist',
    company: 'AC3 Studio / VR-Studio',
    years: '2017-2021',
    imgUrl: '/images/work/ac3.jpeg',
  },
];
