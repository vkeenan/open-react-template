import { AddressClass } from "./address";
import { Meta } from "./meta";

export class AccountResponse {
  Data: AccountClass[] = [];
  Meta: Meta = new Meta();
}

export class AccountNameClass {
  Name: string = '';
  AccountID: string = '';
  constructor(data: { [key: string]: any } | null) {
    if (data === null) {
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
  }
}

export class AccountNamesResponse {
  Data: AccountNameClass[] = [];
}

export class AccountClass {
  AccountID: string = '';
  AccountNumber: string = '';
  AccountSource: string = '';
  Active: boolean = false;
  AnnualRevenue: number = 0;
  BillingAddress: AddressClass = new AddressClass(null);
  BillingContactID: string = '';
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
  FoundedDate: string = '';
  HTML: string = '';
  ID: string = '';
  ImageAltText: string = '';
  ImageURL: string = '';
  Industries: string = '';
  Industry: string = '';
  IPODate: string = '';
  LinkedIn: string = '';
  Location: string = '';
  Logo: string = '';
  MarketCapitalization: string = '';
  Name: string = '';
  NumberInvestments: string = '';
  NumberOfEmployees: string = '';
  Ownership: string = '';
  ParentID: string = '';
  Phone: string = '';
  Publish: boolean = false;
  SalesforceFirst: boolean = false;
  ShippingAddress: AddressClass = new AddressClass(null);
  ShippingContactID: string = '';
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

  constructor(data: { [key: string]: any } | null) {
    if (data === null) {
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
    this.BillingAddress = new AddressClass(data.BillingAddress);
    this.ShippingAddress = new AddressClass(data.ShippingAddress);
  }
}
