function range(start, end, step) {
  const answer = [];

  if (
    step <= 0 ||
    start > end ||
    start === undefined ||
    end === undefined ||
    end === undefined
  ) {
    return answer;
  }

  for (let i = start; i <= end; i += step) {
    answer.push(i);
  }
  return answer;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
