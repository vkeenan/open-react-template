import { AddressClass } from "./address";
import { ProductClass } from "./product";
import { FinancialStatement } from "./financial-statement";
import { Meta } from "./meta";

export class CompanyResponse {
  Data: CompanyClass[] = [];
  Meta: Meta = new Meta();
}


export class CompanyClass {
  AccountID: string = '';
  AccountNumber: string = '';
  AccountSource: string = '';
  Active: boolean = false;
  AnnualRevenue: number = 0;
  CloudRevenueTotal: number = 0;
  CloudType: string = '';
  CloudYear: string = '';
  CrunchbaseURL: string = '';
  Description: string = '';
  EarningsCall: string = '';
  Email: string = '';
  EquityFunding: number = 0;
  Facebook: string = '';
  Fax: string = '';
  FinancialStatements: FinancialStatement[] = [];
  FoundedDate: string = '';
  HTML: string = '';
  ID: string = '';
  ImageAltText: string = '';
  ImageURL: string = '';
  Industry: string = '';
  Industries: string = '';
  IPODate: string = '';
  LinkedIn: string = '';
  ListingAddress: AddressClass = new AddressClass(null);
  Location: string = '';
  Logo: string = '';
  MarketCapitalization: string = '';
  Name: string = '';
  NumberInvestments: string = '';
  NumberOfEmployees: string = '';
  Ownership: string = '';
  ParentID: string = '';
  Phone: string = '';
  Products: ProductClass[] = [];
  Publish: boolean = false;
  SalesforceFirst: boolean = false;
  Slug: string = '';
  TagLine: string = '';
  TickerSymbol: string = '';
  Twitter: string = '';
  Type: string = '';
  Website: string = '';
  YearStarted: string = '';

  serialize() {
    return JSON.stringify(this);
  }

  constructor(data: { [key: string]: any }) {
    if (!data) {
      return;
    }
    for (const key in data) {
      // Check if the key exists in the Data object
      if (data.hasOwnProperty(key) && key in this) {
        // Check if the property value is a simple data type (not an array or object)
        if (typeof data[key] !== 'object' || data[key] === null) {
          // Assign the property value to the identically named property in the Class
          (this as any)[key] = data[key];
        }
      }
    }
    if (data.CompanyProducts) {
      this.Products = data.CompanyProducts.map((item: any) => new ProductClass(item));
    }
    this.ListingAddress = new AddressClass(data.ListingAddress);
  }
}


