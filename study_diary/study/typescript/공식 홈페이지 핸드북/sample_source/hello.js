function ts_greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
ts_greet('Brendan', new Date());
