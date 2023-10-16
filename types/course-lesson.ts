// course-lesson.ts

export class CourseLessonClass {
  ID: string = '';
  AssetID: string | null = null;
  Content: string | null = null;
  CreatedByID: string | null = null;
  CreatedDate: string | null = null;
  ImageAltText: string | null = null;
  ImageURL: string | null = null;
  Logo: string | null = null;
  LastModifiedByID: string | null = null;
  LastModifiedDate: string | null = null;
  Order: number | null = null;
  Slug: string | null = null;
  SectionID: string | null = null;
  Title: string | null = null;
  VideoURL: string | null = null;

  constructor(data: any) {
    if (!data) {
      return;
    }
    for (const key in data) {
      if (data.hasOwnProperty(key) && key in this) {
        if (typeof data[key] !== 'object' || data[key] === null) {
          (this as any)[key] = data[key];
        }
      }
    }
  }
}
