import { CategoryClass } from './category';

export class ProductResponse {
  Data: ProductClass[] = [];
}

export class ProductClass {
  ID: string = '';
  AccountID?: string = '';
  AccountEmail?: string = '';
  AccountLogo?: string = '';
  AccountName?: string = '';
  AccountPublish?: boolean = false;
  AccountSlug?: string = '';
  AccountWebsite?: string = '';
  AppExchange?: string = '';
  Categories: (CategoryClass)[] = [];
  Description?: string = '';
  FullDescription?: string = '';
  ImageAltText: string = '';
  ImageURL: string = '';
  Logo: string = '';
  Name: string = '';
  ProductVideoID?: string = '';
  Published: boolean = false;
  SalesforceSpecific: boolean = false;
  Slug: string = '';
  Tagline?: string = '';
  URL: string = '';

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
    if (data.Industries) {
      this.Categories = data.Industries.map((item: any) => new CategoryClass(item));
    }
  }
}
