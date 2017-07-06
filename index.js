// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

function calculate(max) {
  let i = 2
  let sum = 0

  while (i < max) {
    if ((i % 5 === 0 ) || (i % 3 === 0)) {
      sum += i
    }

    i++
  }

  return sum
}

let resultOf10 = calculate(1000)

console.log('The sum of all the multiples of 3 or 5 below 1000 is' , resultOf10)




