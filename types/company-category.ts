export class CompanyCategoryResponse {
  Data: CompanyCategoryClass[] = [];
}

export class CompanyCategoryClass {
  CloudType: string = '';
  Count: number = 0;

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