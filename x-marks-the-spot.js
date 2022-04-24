const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let x = 0; //set a variable for x and y to equal 0, represetning starting postion (0,0)
  let y = 0;
  for (const move of moves) {
    //search the array and create a mirrored array to work with
    if (move === 'north' || move === 'south') {
      //up or down
      if (move === 'north') {
        y = y + 1;
      } else if (move === 'south') {
        y = y - 1;
      }
    } else if (move === 'east' || move === 'west') {
      //right or left
      if (move === 'east') {
        x = x + 1;
      } else if (move === 'west') {
        x = x - 1;
      }
    }
  }
  return [x, y]; // return new accumalted moves in new array
}

console.log(finalPosition(moves));

// //picking the appropriate building for a voting station
// function chooseStations(stations) {
//   const goodStations = []; //array of suitable stations
//   for (const station of stations) {
//     //searching for station of stationS
//     const capacity = station[1]; //capacity of the station, use index 1 of the arrays
//     if (capacity >= 20) {
//       //does capacity meet the requirement
//       const type = station[2]; //create a variable to hold only the type of building that has met the capacity requriement.
//       if (type === 'school' || type === 'community centre') {
//         //only school and community centers are suitable buildings
//         goodStations.push(station[0]); //push the suitable locations to a new array called goodStations [] the first entry of the suitable old array of arrays called station[0]
//       }
//     }
//   }
//   return goodStations; //return only the suitable locations
// }

// console.log(chooseStations(stations));
