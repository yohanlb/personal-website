export type BlogData = {
  title: string;
  subtitle: string;
  tags: string[];
  link: string;
};

export const blogData: BlogData[] = [
  {
    title: 'When should I Use Server Action (Next.js 15)',
    subtitle:
      'Exploring the Right Use Cases and the main pitfalls for Server Actions in Your React and Next.js Apps',
    tags: ['React', 'Next.js', 'Server Actions', 'API'],
    link: 'https://yohanlb.hashnode.dev/when-should-i-use-server-action-nextjs',
  },
  {
    title: 'The API Client I Didn’t Know I Needed: Bruno',
    subtitle:
      'How I found the perfect API Client for building, documenting, and testing my GeoQuiz API',
    tags: ['Tool Review', 'Open Source', 'API'],
    link: 'https://yohanlb.hashnode.dev/the-api-client-i-didnt-know-i-needed-bruno',
  },
];
