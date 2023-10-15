export class TrackResponse {
  Data: TrackClass[] = [];
}

export class TrackClass {
  ID: string = '';
  Description?: string = '';
  DisplayOrder: number = 0;
  ImageAltText: string = '';
  ImageURL: string = '';
  Icon: string = '';
  Logo: string = '';
  Name: string = '';
  ProductVideoID?: string = '';
  Published: boolean = false;
  SalesforceSpecific: boolean = false;
  Slug: string = '';
  Title?: string = '';

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