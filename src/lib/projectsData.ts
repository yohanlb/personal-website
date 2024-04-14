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
    description: 'Full Stack geography trivia/quiz app',
    link: 'https://geoquiz.co',
    imgUrl: '/images/GeoQuizLogo.png',
  },
  {
    title: 'Santos de Cartier Event',
    description:
      "Interactive installation for Cartier's 100th anniversary in Shanghai.",
    description2: 'In collaboration with: Cartier, K2 Agency, AC3 Studio.',
    link: 'https://ac3-studio.com/works/cartier-santos',
    imgUrl: '/images/cartier.png',
  },
];
