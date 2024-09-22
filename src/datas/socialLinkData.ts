export const SOCIAL_LINKS = {
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
  Behance: {
    displayName: 'Behance',
    href: 'https://www.behance.net/yohanlb',
  },
};

export const getSocialLinksArray = () => {
  return Object.values(SOCIAL_LINKS);
};
