import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserJSON extends CustomerDataParser {
  hook(): void {
    console.log('JSON');
  }
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const costumerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      costumerData.push({ name, age, cpf });
    }

    return costumerData;
  }
}
