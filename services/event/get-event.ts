'use server';
import { EventClass, EventResponse } from '@/types/event';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';
import { logger } from '@/lib/logger';

async function fetchEvent(queryParams: Record<string, string>): Promise<EventClass | null> {
  logger.debug(`👉fetchEvent: ${queryParams}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/events',
    queryParams,
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`⛔fetchEvent: Error fetching event: ${response.statusText}`);
    }
    const restResponse: EventResponse = await response.json();
    logger.debug(`👈fetchEvent: n=${restResponse.Data.length}`);
    return new EventClass(restResponse.Data[0]);
  } catch (error) {
    logger.error(`⛔fetchEvent: Error fetching event: ${error}`);
  }
  return null;
}

export async function getEventByID(id: string): Promise<EventClass | null> {
  return fetchEvent({ eventId: id });
}

export async function getEventBySlug(slug: string): Promise<EventClass | null> {
  return fetchEvent({ slug: slug });
}

export async function getAllEvents(): Promise<{ events: EventClass[] }> {
  logger.debug('👉getAllEvents');
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/events',
    queryParams: {
      limit: '200',
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`⛔getAllEvents: Error fetching events: ${response.statusText}`);
    }
    const restResponse: EventResponse = await response.json();
    const _events = restResponse.Data.map((event) => {
      return new EventClass(event);
    });
    logger.debug(`👈getAllEvents: ${_events.length}`);
    return { events: _events };
  } catch (error) {
    logger.error(`⛔getAllEvents: Error fetching events: ${error}`);
  }
  return { events: [] };
}

export async function getAllEventSlugs(): Promise<{ slugs: string[] }> {
  logger.debug('👉getAllEventSlugs');
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/events',
    queryParams: {
      limit: '200',
    },
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`Error fetching event slugs: ${response.statusText}`);
    }
    const restResponse: EventResponse = await response.json();
    const _slugs = restResponse.Data.map((event) => {
      return event.Slug;
    }).filter((slug): slug is string => slug !== null);

    logger.debug(`👈getAllEventSlugs: ${_slugs.length}`);
    return { slugs: _slugs };
  } catch (error) {
    logger.error(`⛔getAllEventSlugs: Error fetching event slugs: ${error}`);
  }
  return { slugs: [] };
}