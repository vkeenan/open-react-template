
export class AddressClass {
  City: string = '';
  Country: string = '';
  CountryCode: string = '';
  PostalCode: string = '';
  State: string = '';
  StateCode: string = '';
  Street: string = '';

  constructor(data: any) {
    if (!data) {
      return;
    }
    this.City = data.City;
    this.Country = data.Country;
    this.CountryCode = data.CountryCode;
    this.PostalCode = data.PostalCode;
    this.State = data.State;
    this.StateCode = data.StateCode;
    this.Street = data.Street;
  }
}
