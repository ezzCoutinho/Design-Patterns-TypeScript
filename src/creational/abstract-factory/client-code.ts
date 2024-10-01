import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Mercedes C-180', 'João');
const car2 = individualFactory.createVehicle('Civic', 'Filipe');

car1.pickUp();
car2.pickUp();
