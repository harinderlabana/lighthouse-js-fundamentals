function howManyHundreds(num) {
  const container = (num - (num % 100)) / 100; //calculation for how many containers full of 100 bottles each.
  return container; //return only full containers
}

console.log(howManyHundreds(1000), '=?', 10);
console.log(howManyHundreds(894), '=?', 8);
console.log(howManyHundreds(520), '=?', 5);
console.log(howManyHundreds(99), '=?', 0);
console.log(howManyHundreds(0), '=?', 0);
