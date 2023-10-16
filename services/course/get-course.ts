'use server';
import { CourseClass, CourseResponse } from '@/types/course';
import { logger } from '@/lib/logger';
import { createFetchConfig, FetchConfig } from '@/lib/fetch-config';

export async function getAllCourses(): Promise<CourseClass[] | null> {
  logger.debug('👉getAllCourses');
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/courses?limit=1000',
  };

  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
      cache: 'no-store', //! debug only
    });
    if (!response.ok) {
      throw new Error(`⛔getAllCourses: Error fetching courses: ${response.statusText}`);
    }
    const restResponse: CourseResponse = await response.json();
    logger.debug(`👈getAllCourses: done ${restResponse.Data.length}`);
    return restResponse.Data;
  } catch (error) {
    logger.error(`⛔getAllCourses: Error fetching courses: ${error}`);
  }
  return null;
}

export async function getCourseBySlug(slug: string): Promise<CourseClass | null> {
  logger.debug(`👉getCourseBySlug: ${slug}`);
  const config: FetchConfig = {
    endpoint: 'http://members.work.tnxs.net:8080/v1/courses?slug=' + slug,
  };
  try {
    const { headers, url } = createFetchConfig(config, 'GET');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers,
      cache: 'no-store', //! debug only
    });
    if (!response.ok) {
      throw new Error(`⛔getAllCourses: Error fetching courses: ${response.statusText}`);
    }
    const restResponse: CourseResponse = await response.json();
    logger.debug(`👉getCourseBySlug: done ${restResponse.Data.length}`);
    return restResponse.Data[0];
  } catch (error) {
    logger.error(`👉getCourseBySlug: Error fetching course: ${error}`);
  }
  return null;


}