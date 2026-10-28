/**
 * create  function that will retun only the even numbers
 * return the sum of even numbers
 *
 */

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return evens; /**return অবশ্যই লুপের বাইরে দিতে হবে একই সাথে ফাংশনের ভিতরে থাকতে হবে। */
}

// const numbers = [3, 4, 53, 2, 6, 10, 15];
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens);

/**find out sum of an arry using funtion */
function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
        // console.log(number)
      sum = sum + number;
    }
  }
  return sum;
}

const number = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sumOfEvenNumbers(number);
console.log(sum);
