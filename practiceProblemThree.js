/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.  */

const numOfArray = [1, 2, 3, 4, 5];

// const sumOfArray = arrays => {
//   let total = 0;
//   for (const array of arrays){
//     total += array;
//   }
//   return total;
// }

const average = array => {
  const square = array.map(array => Math.pow(array, 2));
  const sum = square.reduce((current, previous) => current + previous, 0);
  const average = parseFloat((sum / array.length).toFixed(2));
  return average;
}

console.log(average(numOfArray));
