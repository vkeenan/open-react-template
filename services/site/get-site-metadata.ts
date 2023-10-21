import { logger } from '@/lib/logger';

export async function getSiteMetadata() {
  logger.debug(`👉getSiteMetadata`);
  let siteData: any = {
    type: 'website',
    category: 'News',
    siteId: "workdifferentwithai-com",
    siteTitle: "Work Different with AI",
    siteUrl: "https://workdifferentwithai.com",
    language: "en",
    title: 'Work Different with AI',
    description: 'Work Different with AI',
    applicationName: 'workdifferentwithai-com',
    referrer: 'no-referrer',
    keywords: [
      'AI ethics',
      'Responsible AI',
      'AI risks',
      'AI security',
      'Uplifting workforces',
      'Humane AI',
      'Enterprise AI adoption',
      'AI frameworks',
      'AI influencers',
      'AI community',
      'IT strategy',
    ],
    creator: 'Vernon Keenan',
    publisher: 'WorkDifferentWithAI.com',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      title: 'Work Different with AI',
      description: 'Work Different with AI',
      url: 'https://workdifferentwithai.com',
      siteName: 'Work Different with AI',
      article: {
        publishedTime: '2023-02-28T17:35:20Z',
        modifiedTime: '2023-02-28T18:30:00Z',
        expirationTime: '2023-03-31T17:35:20Z',
        section: 'Technology',
        tag: 'Programming',
        authors: ['John Doe', 'Jane Smith'],
        publisher: 'ACME Publishing'
      },
      images: [
        {
          url: 'https://res.cloudinary.com/dwtnhsbyn/images/f_auto,q_auto/v1697828764/opengraph-image/opengraph-image.png?_i=AA',
          width: 1200,
          height: 630
        }
      ],
      locale: 'en_US',
      type: 'website'
    },

    icons: {
      icon: '/images/favicon.ico',
      apple: '/images/apple-touch-icon.png',
      shortcut: '/images/shortcut-icon.png'
    },

    twitter: {
      card: 'summary_large_image',
      siteId: 'workdifferentwithai-com',
      creator: '@workdiffwithai',
      title: 'Work Different with AI',
      images: ['/images/opengraph-image.png']
    },

    viewport: {
      width: 'device-width',
      initialScale: 1
    },

    verification: {
      google: '1234',
      yandex: '5678'
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

  };

  logger.debug(`👈getSiteMetadata`);
  return siteData;
}
