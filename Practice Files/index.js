function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  //Write your code here:
  //Return an array of fibonacci numbers starting from 0.
  
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibonacciArray = [0, 1]; 

  for (let i = 2; i < n; i++) {
    let nextFib = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(nextFib);
  }
  return fibonacciArray;
  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(15));