function carPassing(cars, speed) {
  var time = Date.now();
  var person = {
    time: time,
    speed: speed,
  };
  cars.push(person);
  return cars;
}
