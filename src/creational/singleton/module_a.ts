import { MyDataBaseFunction } from './db/my-database-function';

const db1 = MyDataBaseFunction;
db1.add({
  name: 'Luiz',
  age: 34,
});
db1.add({
  name: 'Roberty',
  age: 34,
});
db1.add({
  name: 'Ana',
  age: 23,
});

export { db1 };
