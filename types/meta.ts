export class Meta {
  Contact: string = '';
  Copyright: string = '';
  License: string = '';
  OperationID: string = '';
  Pagination: Pagination = new Pagination();
  RequestIP: string = '';
  RequestType: string = '';
  RequestURL: string = '';
  ServerInfo: string = '';
  ServerResponseTime: string = '';
  ServerTimeStamp: string = '';
  TaxnexusAccount: string = '';
}

export class Pagination {
  Limit: number = 0;
  Offset: number = 0;
  PageSize: number = 0;
  SetSize: number = 0;
}