import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log(`Entrega para ${name}.`);
    console.log(
      `Em ${this.intrinsicState.street}, ${this.intrinsicState.city} número: ${number}.`,
    );
    console.log('#####');
  }
}
