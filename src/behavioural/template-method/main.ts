import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-parse-txt';
import { CustomerDataParserJSON } from './customer-data-parse-json';

async function run() {
  const filePathTXT = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTXT = new CustomerDataParserTxt(filePathTXT);
  await customerDataParserTXT.fixCustomerData();
  console.log(customerDataParserTXT.customerData);

  console.log();

  const filePathJSON = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJSON = new CustomerDataParserJSON(filePathJSON);
  await customerDataParserJSON.fixCustomerData();
  console.log(customerDataParserJSON.customerData);
}

run();
