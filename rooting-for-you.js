function judgeVegetable(vegetables, metric) {  
    let measure = metric;
    if (measure === metric) {
    let scores = [];
    for (let i = 0; i < vegetables.length; i++) {
      scores.push(vegetables[i][metric]);
    }
    let winner = Math.max(...scores);
    for (let y = 0; y < vegetables.length; y++) {
      if (winner === vegetables[y][metric]) {
        let winnerName = vegetables[y].submitter;
        return winnerName;
      }
    }
  } else {
    return undefined;
}
