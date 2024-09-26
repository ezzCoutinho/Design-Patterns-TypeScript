function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Otávio',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
// copiando o protótipo.
Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Sub classe aqui';
}
// Herança da Person
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Luiz', 'Otávio', 30);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Éverson', 'Silva', 34);
console.log(person2);
console.log(person2.fullName());
