const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

//picking the appropriate building for a voting station
function chooseStations(stations) {
  const goodStations = []; //array of suitable stations
  for (const station of stations) {
    //searching for station of stationS
    const capacity = station[1]; //capacity of the station, use index 1 of the arrays
    if (capacity >= 20) {
      //does capacity meet the requirement
      const type = station[2]; //create a variable to hold only the type of building that has met the capacity requriement.
      if (type === 'school' || type === 'community centre') {
        //only school and community centers are suitable buildings
        goodStations.push(station[0]); //push the suitable locations to a new array called goodStations [] the first entry of the suitable old array of arrays called station[0]
      }
    }
  }
  return goodStations; //return only the suitable locations
}

console.log(chooseStations(stations));
