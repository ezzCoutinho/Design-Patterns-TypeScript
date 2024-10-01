import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const car3 = carFactory.getVehicle('Santana');
  const bicycle = bicycleFactory.getVehicle('Bicicleta');
  const cars = [car1, car2, bicycle, car3];
  return cars[randomNumbers(cars.length)];
}
