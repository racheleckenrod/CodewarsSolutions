// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples

// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113



function hexHash(code){
    let arr = []
    code = code.split("")
    let nums = code.map(item => item.charCodeAt().toString(16))
    console.log(nums)
    nums = nums.join("").split("")
    console.log(nums)
    nums = nums.filter(item => item > 0)
    console.log(nums)
    return nums.reduce((acc,c) => +acc + +c,0)
    //magic
  }
  console.log(hexHash("Hello, World!"))