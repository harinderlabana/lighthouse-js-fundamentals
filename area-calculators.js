function calculateRectangleArea(length, width) {
  //function for calculating area of rectangle or square
  const rectangle = length * width;
  if (rectangle < 0) {
    return undefined;
  } else {
    return rectangle;
  }
}

function calculateTriangleArea(base, height) {
  //function for calculating area of a triangle
  const triangle = (base * height) / 2;
  if (triangle < 0) {
    return undefined;
  } else {
    return triangle;
  }
}

function calculateCircleArea(radius) {
  //function for calculating area of a circle
  const circle = Math.PI * Math.pow(radius, 2);
  if (radius < 0) {
    return undefined;
  } else {
    return circle;
  }
}

console.log(calculateRectangleArea(-3, 4));
console.log(calculateTriangleArea(3, 4));
console.log(calculateCircleArea(-1));
