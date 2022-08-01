export default function () {}

let message: string = 'Hello World';

function process(a: number, b: number, isDouble?: boolean) {
  const sum = a + b;

  return isDouble ? sum * 2 : sum;
}

function wrap<T>(value: T) {
  return {value};
}

interface Person {
  name: string;
}

const person: Person = {name: 'Chan Kim'};
const result = wrap(person);
console.log(result.value.name);

interface Item<T> {
  id: number;
  data: T;
}

interface Person {
  name: string;
}

interface Place {
  location: string;
}

const personItem: Item<Person> = {
  id: 1,
  data: {
    name: 'Chan Kim',
  },
};

const placdItem: Item<Place> = {
  id: 2,
  data: {
    location: 'Seoul',
  },
};
