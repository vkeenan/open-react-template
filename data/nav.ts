export const navItems = [
  {
    id: 100,
    name: 'Sign Up Now',
    href: '/sign-up',
    current: false,
    protected: false,
    guestonly: true,
  },
  {
    id: 210,
    name: 'Events',
    href: '/events',
    current: false,
    protected: false,
    guestonly: false,
  },
  {
    id: 120,
    name: 'Consulting',
    href: '/consulting',
    current: false,
    protected: false,
    guestonly: false,
  },
  {
    id: 130,
    name: 'Workshops',
    href: '/workshops',
    current: false,
    protected: false,
    guestonly: false,
  },
  {
    id: 140,
    name: 'Members',
    href: '/home',
    protected: true,
    current: false,
    guestonly: false,
    sub: [
      {
        id: 160,
        name: 'Favorites',
        href: '/home/favorites',
        current: false,
        protected: true,
        guestonly: false,
      },
      {
        id: 180,
        name: 'My Content',
        href: '/home/content',
        current: false,
        protected: true,
        guestonly: false,
      },
      {
        id: 200,
        name: 'Help and Support',
        href: '/home/help',
        current: false,
        protected: true,
        guestonly: false,
      },
    ],
  },
  {
    id: 220,
    name: 'About',
    href: '/about',
    current: false,
    protected: false,
    guestonly: false,
    sub: [
      {
        id: 230,
        name: 'Contact',
        href: '/contact',
        current: false,
        protected: false,
        guestonly: false,
      },
      {
        id: 240,
        name: 'Privacy',
        href: '/privacy',
        current: false,
        protected: false,
        guestonly: false,
      },
      {
        id: 250,
        name: 'Terms',
        href: '/terms',
        current: false,
        protected: false,
        guestonly: false,
      },
    ],
  },
];
