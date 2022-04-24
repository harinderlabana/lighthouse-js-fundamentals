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
