// event-category.ts
export class EventCategoryResponse {
  Data: EventCategoryClass[] = [];
}

export class EventCategoryClass {
  ID: string = '';
  CreatedByID: string | null = null;
  CreatedDate: string | null = null;
  Description: string | null = null;
  ImageAltText: string | null = null;
  ImageURL: string | null = null;
  LastModifiedByID: string | null = null;
  LastModifiedDate: string | null = null;
  Name: string | null = null;
  Logo: string | null = null;
  Slug: string | null = null;

  constructor(data: any) {
    if (!data) {
      return;
    }
    if (typeof data === 'string') {
      this.Slug = data;
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
