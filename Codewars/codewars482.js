// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  num = num.toString().split('')
    num.forEach(function(item, i, arr){
    arr[i] = item * item;
   })
//     console.log(num)
//    num.forEach(function (item, index, arr) {
//     arr[index] = item * 10;
//   })

   return +num.join('')
    
  }

  console.log(squareDigits(222))

// const numbers = [65, 44, 12, 4];
// numbers.forEach(function (item, index, arr) {
//     arr[index] = item * 10;
//   })

// // function myFunction(item, index, arr) {
// //   arr[index] = item * 10;
// // }

// console.log(numbers)