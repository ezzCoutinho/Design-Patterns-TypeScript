import { MyDataBaseFunction } from './db/my-database-function';
import { db1 as db1ModuleA } from './module_a';

const db1 = MyDataBaseFunction;
db1.add({
  name: 'Fernando',
  age: 34,
});
db1.add({
  name: 'Cecilia',
  age: 34,
});
db1.add({
  name: 'Roberta',
  age: 23,
});

db1.show();

console.log(db1 === db1ModuleA);
