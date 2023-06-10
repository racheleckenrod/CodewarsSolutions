// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples
// 1
// 6
// +
// 1
// 8
// 2
// 14
// 2
// 6
// +
// 3
// 9
// 5
// 15
// 1
// 2
// 2
// +
// 8
// 1
// 1
// 10
// 3
// +
// ​
  
// 1
// 1
// 2
// ​
  
// 6
// 8
// 14
// ​
 
// ​
  
// +
// ​
  
// 2
// 3
// 5
// ​
  
// 6
// 9
// 15
// ​
 
// ​
  
// +
// ​
  
// 1
// 1
// ​
  
// 2
// 8
// 10
// ​
  
// 2
// 1
// 3
// ​
 
// ​


// describe("Silly addition", () => {
//     it("Real addition", () => {
//       assert.strictEqual(add(2, 11), 13);
//       assert.strictEqual(add(0, 1), 1);
//       assert.strictEqual(add(0, 0), 0);
//     });
    
//     it("Silly addition", () => {
//       assert.strictEqual(add(16, 18), 214);
//       assert.strictEqual(add(26, 39), 515);
//       assert.strictEqual(add(122, 81), 1103);
//     });
    
//     it("Big addition", () => {
//       assert.strictEqual(add(1222, 30277), 31499);
//       assert.strictEqual(add(1236, 30977), 31111013);
//       assert.strictEqual(add(38810, 1383), 391193);
//       assert.strictEqual(add(49999, 49999), 818181818);
//     });
//   });
  
// PREP
// P: we are given to numbers
// R: we are to return the addition of the numbers in a particular way: adding the numbers together column by column without carying the digits.
// E: when adding 18 and 18, we should return 216. 
// P: if we split the numbers into an array, and add up each index then join them ? different length arrays... need to add the last ones together. pop the numbers off then unshift the sum into array?
 
function add(num1, num2) {
    let sum
    let result = []
    let length

    if(num1.toString().length > num2.toString().length){
        length = num2.toString().length
    }else{
        length = num1.toString().length
    }
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')

   for(let i = 0; i < length; i++){
    sum = +num1.pop() + +num2.pop()

    result.unshift(sum)
    console.log(num1,num2)
   }

    if(num1.length) result.unshift(+num1.join(''))
    if(num2.length) result.unshift(+num2.join(''))

    console.log(num1, num2, sum, result)
    return +result.join('')
  }

  console.log(add(49999, 49999))