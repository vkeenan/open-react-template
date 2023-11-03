export class FinancialStatement {
  ID: string = '';
  AccountID: string = '';
  AccountNumber: string = '';
  AccessNumber: string = '';
  CloudRevenue: number = 0;
  Description: string = '';
  EdgarURL: string = '';
  FilingType: string = '';
  GrossProfit: number = 0;
  NetIncome: number = 0;
  PeriodEndDate: string = '';
  TotalRevenue: number = 0;
  Year: string = '';

  serialize() {
    return JSON.stringify(this);
  }

  constructor(data: { [key: string]: any }) {
    if (!data) {
      return;
    }
    for (const key in data) {
      // Check if the key exists in the Data object
      if (data.hasOwnProperty(key)) {
        // Check if the key exists in this class
        if (this.hasOwnProperty(key)) {
          // Set the value of the key in this class
          (this as any)[key] = data[key];
        }
      }
    }
  }
}
