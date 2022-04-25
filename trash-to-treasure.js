function smartGarbage(trash, bins) {
  //search for trash array variable through the switch cases and add +1
  switch (trash) {
    case 'waste':
      bins['waste']++;
      break;
    case 'recycling':
      bins['recycling']++;
      break;
    case 'compost':
      bins['compost']++;
      break;
  }
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
