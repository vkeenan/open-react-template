// event.ts
import { EventCategoryClass } from "./event-category";

export class EventResponse {
  Data: EventClass[] = [];
}

export class EventClass {
  ID: string = '';
  AccountID: string | null = null;
  Capacity: number | null = null;
  CreatedByID: string | null = null;
  CreatedDate: string | null = null;
  EventCategoryID: string | null = null;
  EventCategory: EventCategoryClass | null = null;
  Description: string | null = null;
  EndDate: string | null = null;
  ImageAltText: string | null = null;
  ImageURL: string | null = null;
  Logo: string | null = null;
  LastModifiedByID: string | null = null;
  LastModifiedDate: string | null = null;
  Location: string | null = null;
  Online: boolean | null = null;
  OrganizerUserID: string | null = null;
  RegURL: string | null = null;
  Slug: string | null = null;
  StartDate: string | null = null;
  Title: string | null = null;

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
    if (data.EventCategory) {
      this.EventCategory = new EventCategoryClass(data.EventCategory);
    }
  }
}
