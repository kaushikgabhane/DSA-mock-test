const squareRoot = (x) => {
    let floor = 0;
    let high = x;
    
    while (floor <= high) {
      let mid = (floor + high) >> 1;
      if (mid * mid <= x) {
        floor = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return floor - 1;
  };

console.log(  squareRoot(5));

