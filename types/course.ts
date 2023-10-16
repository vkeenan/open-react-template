// course.ts
import { CourseSectionClass } from "./course-section";

export class CourseResponse {
  Data: CourseClass[] = [];
}

export class CourseClass {
  ID: string = '';
  Channels: string | null = null;
  CreatedByID: string | null = null;
  CreatedDate: string | null = null;
  Description: string | null = null;
  DisplayOrder: number | null = null;
  FullDescription: string | null = null;
  ImageAltText: string | null = null;
  ImageURL: string | null = null;
  InstructorID: string | null = null;
  LastModifiedByID: string | null = null;
  LastModifiedDate: string | null = null;
  Logo: string | null = null;
  Name: string | null = null;
  Price: number | null = null;
  Slug: string | null = null;
  TemplateID: string | null = null;
  Title: string | null = null;
  Sections: CourseSectionClass[] | null = null;

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
    if (data.Sections) {
      this.Sections = data.Sections.map((section: any) => new CourseSectionClass(section));
    }
  }
}
