import { ProductClass } from './product';
import { ServiceClass } from './service';

export class CategoryResponse {
  Data: CategoryClass[] = [];
}
export class CategoryClass {
  ID: string = '';
  Description?: string = '';
  ImageAltText?: string = '';
  ImageURL?: string = '';
  Level: string = '';
  Logo?: string = '';
  Name: string = '';
  ParentIndustryID?: string = '';
  Path: string = '';
  ProductCategory: boolean = false;
  ServiceCategory: boolean = false;
  Products: ProductClass[] = [];
  Services: ServiceClass[] = [];
  SiteURL?: any = '';
  Slug: string = '';
  Tagline?: string = '';

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
    if (data.CompanyProducts) {
      this.Products = data.CompanyProducts.map((item: any) => new ProductClass(item));
    }
    if (data.CompanyServices) {
      this.Services = data.CompanyServices.map((item: any) => new ServiceClass(item));
    }
  }
}

