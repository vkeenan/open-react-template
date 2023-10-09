export type Metadata = {
  applicationName?: string;
  authors?: string[];
  category?: string;
  creator?: string;
  description?: string;
  generator?: string;
  keywords?: string[];
  manifest?: string;
  publisher?: string;
  title?: string;
  additional?: {
    tagName?: string;
    attributes?: {};
    content?: string;
  }[];
  formatDetection?: {
    address: boolean;
    email?: boolean;
    telephone?: boolean;
  };
  icons?: {
    icon?: string;
    shortcut?: string;
    apple?: string;
    other: {
      rel?: string;
      url?: string;
    };
  };
  openGraph?: {
    description?: string;
    locale?: string;
    siteName?: string;
    title?: string;
    type?: string;
    url?: string;
    images?: {
      url?: string;
      alt?: string;
      width?: number;
      height?: number;
    }[];
  };
  robots?: {
    index?: string;
    follow?: string;
  };
  twitter?: {
    card?: string;
    siteId?: string;
    creator?: string;
    creatorId?: string;
    title?: string;
    description?: string;
    images?: {
      url?: string;
      alt?: string;
    }[];
  };
};
