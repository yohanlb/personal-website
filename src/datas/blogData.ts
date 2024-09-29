export type BlogData = {
  title: string;
  subtitle: string;
  tags: string[];
  link: string;
};

export const blogData: BlogData[] = [
  {
    title: 'The API Client I Didn’t Know I Needed: Bruno',
    subtitle:
      'How I found the perfect API Client for building, documenting, and testing my GeoQuiz API',
    tags: ['Tool Review', 'Open Source', 'API'],
    link: 'https://yohanlb.hashnode.dev/the-api-client-i-didnt-know-i-needed-bruno',
  },
];
