// Protótipos apenas fazem copias, e não herdam...
// Object.create(Protótipo a ser copiado)
const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Otávio',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'João';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
