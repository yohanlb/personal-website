export const SOCIAL_LINKS = {
  Blog: {
    displayName: 'Dev Blog',
    href: 'https://yohanlb.hashnode.dev/',
  },
  LinkedIn: {
    displayName: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yohanlb/',
  },
  GitHub: {
    displayName: 'GitHub',
    href: 'https://github.com/yohanlb',
  },
  Twitter: {
    displayName: 'Twitter',
    href: 'https://twitter.com/yohlb',
  },
  Bluesky: {
    displayName: 'Bluesky',
    href: 'https://bsky.app/profile/yohlb.bsky.social',
  },
  Behance: {
    displayName: 'Behance',
    href: 'https://www.behance.net/yohanlb',
  },
};

export const getSocialLinksArray = () => {
  return Object.values(SOCIAL_LINKS);
};
