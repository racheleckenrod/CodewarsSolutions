// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String
// Input >> Output Examples
// strong_num(1) ==> return "STRONG!!!!"
// Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

// strong_num(123) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

// strong_num(2)  ==>  return "STRONG!!!!"
// Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

// strong_num(150) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .

// I gues it is time to get to the factorial...
// separate n into digits if there are any, take each digit and run it through a factorializer then sum up all the factors and compare it to n.
function strong(n) {
    let arr = n.toString().split("")
    let factored = []
   
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1 || arr[i] == 0){
            factored[i] = 1
        }else if(arr[i] > 1){
            for(let j = arr[i]-1; j >= 1; j--){
                arr[i] *= j
                factored[i] = arr[i]
            }
        }
    }
    factored = factored.reduce((acc,c) => acc + c, 0)

    if(n === factored){
        return "STRONG!!!!"
    }else{
        return "Not Strong !!"
    }
  }
  console.log(strong(145))
