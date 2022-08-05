function ts_greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

ts_greet('Brendan', new Date());
