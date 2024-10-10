import { DeliverFactory } from './delivery-factory';

export const deliveryContext = function (
  factory: DeliverFactory,
  name: string,
  number: string,
  street: string,
  city: string,
): void {
  const location = factory.makeLocation({ street, city });
  location.deliver(name, number);
};
