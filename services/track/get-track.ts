'use server';
import { TrackClass, TrackResponse } from '@/types/track';
import { logger } from '@/lib/logger';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';

export async function getAllTracks(): Promise<TrackClass[]> {
  logger.debug('👉getAllTracks');
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/tracks?limit=1000',
  };

  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
      cache: 'no-store', //! debug only
    });
    if (!response.ok) {
      throw new Error(`⛔getAllTracks: Error fetching tracks: ${response.statusText}`);
    }
    const restResponse: TrackResponse = await response.json();
    logger.debug(`👈getAllTracks: done ${restResponse.Data.length}`);
    return restResponse.Data;
  } catch (error) {
    logger.error(`⛔getAllTracks: Error fetching tracks: ${error}`);
  }
  return [];
}

export async function getTrackBySlug(slug: string): Promise<TrackClass | null> {
  logger.debug(`👉getTrackBySlug: ${slug}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/tracks?slug=' + slug,
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
      cache: 'no-store', //! debug only
    });
    if (!response.ok) {
      throw new Error(`⛔getTrackBySlug: Error fetching tracks: ${response.statusText}`);
    }
    const restResponse: TrackResponse = await response.json();
    logger.debug(`👉getTrackBySlug: done ${restResponse.Data.length}`);
    return restResponse.Data[0];
  } catch (error) {
    logger.error(`👉getTrackBySlug: Error fetching track: ${error}`);
  }
  return null;
}