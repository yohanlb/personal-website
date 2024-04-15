export type ProjectData = {
  title: string;
  description: string;
  description2?: string;
  link: string;
  imgUrl: string;
};

export const projectsData: ProjectData[] = [
  {
    title: 'Geo Quiz (Work in Progress)',
    description: 'Full Stack geography trivia/quiz app.',
    description2: 'React / Typescript / Tailwind / NodeJS / Supabase',
    link: 'https://geoquiz.co',
    imgUrl: '/images/work/GeoQuizLogo.png',
  },
  {
    title: 'Santos de Cartier Event',
    description:
      "Interactive installation for Cartier's 100th anniversary in Shanghai.",
    description2: 'In collaboration with: Cartier, K2 Agency, AC3 Studio.',
    link: 'https://ac3-studio.com/works/cartier-santos',
    imgUrl: '/images/work/cartier.png',
  },
  {
    title: 'Never Stop Drinkin’ - Critical Pint',
    description:
      'Directed, filmed, and edited a music video for the hard rock band Critical Pint.',
    link: 'https://www.youtube.com/watch?v=7cMP9627Y9E',
    imgUrl: '/images/work/NeverStop.png',
  },
  {
    title: 'Catify VR',
    description:
      'Developed an Oculus / HTC Vive VR game, and released it on Steam.',
    link: 'https://store.steampowered.com/app/815320/Catify_VR/',
    imgUrl: '/images/work/Catify.png',
  },
];
