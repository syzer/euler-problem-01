// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// > 6%0
// NaN
// > 6%1
// 0


function calculate() {
  let n = 7
  let i = 1

  while (i < n) {
    if (n % i === 0) {
      console.log('i')
    } else {
      console.log('i', i)
    }
    i++
  }


  // 7/3 = ?
  // 7/5 = ?
  // if is => +1

  return 3
}


// calculate() === 23


//
// Find the sum of all the multiples of 3 or 5 below 1000.


