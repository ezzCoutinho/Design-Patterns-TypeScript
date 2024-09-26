// Cópias rasas podem ser redefinidas;
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const address1 = new Address('Av Brasil', 30);
const person1 = new Person('Person1', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'BLA BLA BLA';

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);
