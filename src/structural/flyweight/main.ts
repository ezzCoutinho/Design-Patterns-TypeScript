import { deliveryContext } from './delivery/delivery-context';
import { DeliverFactory } from './delivery/delivery-factory';

const factory = new DeliverFactory();
deliveryContext(factory, 'Luiz', '36', 'Alexânia', 'GO');
deliveryContext(factory, 'Helena', '36', 'Alexânia', 'GO');
deliveryContext(factory, 'Joana', '436', 'Anápolis', 'GO');
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Joana', '436', 'Rua B', 'RJ');

console.log();
console.log(factory.getLocations());
