export type ProjectData = {
  title: string;
  description: string;
  description2?: string;
  link: string;
  imgUrl: string;
};

export const projectsData: ProjectData[] = [
  {
    title: 'GeoQuiz',
    description: 'Full Stack geography trivia/quiz app.',
    description2: 'React / NextJs / Typescript / Tailwind / NodeJS / Supabase',
    link: 'https://geoquiz.co/home',
    imgUrl: '/images/work/GeoQuizLogo.png',
  },
  {
    title: 'Santos de Cartier Event',
    description:
      "Interactive installation for Cartier's 100th anniversary in Shanghai.",
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
