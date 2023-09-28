import { getApolloClient } from '@/lib/apollo-client';
import { decodeHtmlEntities } from '@/lib/util';
import config from '../../package.json';
import { logger } from '@/lib/logger';
const { homepage = '' }: any = config;

import { QUERY_SEO_DATA, QUERY_SITE_DATA } from '@/data/site';

export async function getSiteMetadata() {
  logger.debug(`👉getSiteMetadata`);
  const apolloClient = getApolloClient();

  let siteData;
  let seoData;

  try {
    siteData = await apolloClient.query({
      query: QUERY_SITE_DATA,
    });
  } catch (e: any) {
    logger.error(
      `💣getSiteMetadata: Failed to query site data: ${e.message}`
    );
    throw e;
  }

  const { generalSettings } = siteData?.data || {};
  const { title, description, language } = generalSettings;
  const siteId = 'salesforcedevops-net'
  const settings = {
    title,
    siteId,
    siteTitle: title,
    description,
    siteUrl: homepage,
  };

  // It looks like the value of `language` when US English is set
  // in WordPress is empty or "", meaning, we have to infer that
  // if there's no value, it's English. On the other hand, if there
  // is a code, we need to grab the 2char version of it to use ofr
  // the HTML lang attribute

  if (!language || language === '') {
    (settings as any).language = 'en';
  } else {
    (settings as any).language = language.split('_')[0];
  }

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  try {
    seoData = await apolloClient.query({
      query: QUERY_SEO_DATA,
    });
  } catch (e: any) {
    logger.error(
      `💣getSiteMetadata: Failed to query SEO plugin: ${e.message}`
    );
    logger.error(
      '💣getSiteMetadata: Is the SEO Plugin installed?'
    );
    throw e;
  }

  const { webmaster, social } = seoData?.data?.seo || {};

  if (social) {
    (settings as any).social = {};

    Object.keys(social).forEach((key) => {
      const { url } = social[key];
      if (!url || key === '__typename') return;
      (settings as any).social[key] = url;
    });
  }

  if (webmaster) {
    (settings as any).webmaster = {};

    Object.keys(webmaster).forEach((key) => {
      if (!webmaster[key] || key === '__typename') return;
      (settings as any).webmaster[key] = webmaster[key];
    });
  }

  if (social.twitter) {
    (settings as any).twitter = {
      username: social.twitter.username,
      cardType: social.twitter.cardType,
    };

    (settings as any).social.twitter = {
      url: `https://twitter.com/${(settings as any).twitter.username}`,
    };
  }

  (settings as any).title = decodeHtmlEntities((settings as any).title);
  logger.debug(`👈getSiteMetadata`);

  return settings;
}
