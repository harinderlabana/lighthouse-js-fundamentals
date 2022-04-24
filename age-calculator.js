function ageCalculator(name, yearOfBirth, currentYear) {
  //take in variables from the console function command below
  const age = name + ' is ' + (currentYear - yearOfBirth) + ' years old.'; //simple string with calculator for age
  return age; //return the string with age variable
}
//inputs
console.log(ageCalculator('Suzie', 1983, 2015));
console.log(ageCalculator('Miranda', 1983, 2015));
console.log(ageCalculator('Ferdinand', 1988, 2015));
