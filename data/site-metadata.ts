import type { Metadata } from "next";

interface SiteSettings {
  siteUrl: string;
  title: string;
  description: string;
  logoCaption?: string;
  logoHeight?: number;
  logoWidth?: number;
  logoUrl?: string;
  siteId?: string;
  publisherLogoId?: string;
  publisherLogoUrl?: string;
  publisherName?: string;
  publisherUrl?: string;
  publisherSocialProfiles?: string[];
}
export const siteSettings: SiteSettings = {
  siteUrl: "https://workdifferentwithai.com",
  title: "Work Different with AI",
  description:
    'Our goal is empowering professionals across industries to Work Different With AI. Through our training content, workshops, and advisory services, we help teams implement AI responsibly to augment human potential.',
  publisherName: 'Work Different with AI',
  publisherUrl: 'https://workdifferentwithai.com',
  publisherLogoId: 'https://res.cloudinary.com/dwtnhsbyn/images/f_auto,q_auto/v1697828764/opengraph-image/opengraph-image.png?_i=AA',
  publisherLogoUrl: 'https://res.cloudinary.com/dwtnhsbyn/images/f_auto,q_auto/v1697828764/opengraph-image/opengraph-image.png?_i=AA',
  logoCaption: 'Work Different with AI',
  logoHeight: 630,
  logoWidth: 1200,
  siteId: 'https://workdifferentwithai.com',
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  creator: 'Vernon Keenan',
  publisher: siteSettings.title,
  applicationName: 'workdifferentwithai-com',
  category: 'News',
  title: siteSettings.title,
  description: siteSettings.description,
  referrer: 'no-referrer',
  authors: [{ name: 'Vernon Keenan', url: 'https://linkedin.com/a/vernonkeenan' }],
  generator: 'Next.js',
  keywords: [
    'AI community',
    'AI ethics',
    'AI frameworks',
    'AI influencers',
    'AI risks',
    'AI security',
    'Enterprise AI adoption',
    'Humane AI',
    'IT strategy',
    'Responsible AI',
    'Uplifting workforces',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: siteSettings.title,
    description: siteSettings.description,
    url: siteSettings.siteUrl,
    siteName: siteSettings.title,
    images: [
      {
        alt: 'Digital illustration of professionals seated at a conference table with laptops, under a large glowing AI brain and surrounded by vibrant technological icons, with the phrase "WORK DIFFERENT WITH AI" displayed prominently',
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
    site: '@workdiffwithai',
    creator: '@workdiffwithai',
    title: siteSettings.title,
    description: siteSettings.description,
    images: [
      {
        alt: 'Digital illustration of professionals seated at a conference table with laptops, under a large glowing AI brain and surrounded by vibrant technological icons, with the phrase "WORK DIFFERENT WITH AI" displayed prominently',
        url: 'https://res.cloudinary.com/dwtnhsbyn/images/f_auto,q_auto/v1697828764/opengraph-image/opengraph-image.png?_i=AA',
        width: 1200,
        height: 630
      }
    ],
  },
  robots: {
    index: true,
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
