// Task :
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .


// describe("Basic tests",() =>{
//     Test.assertEquals(minimumNumber([3,1,2]),1);
//     Test.assertEquals(minimumNumber([5,2]),0);
//     Test.assertEquals(minimumNumber([1,1,1]),0);
//     Test.assertEquals(minimumNumber([2,12,8,4,6]),5);
//     Test.assertEquals(minimumNumber([50,39,49,6,17,28]),2);
//   });

// PREP
// P: we are given an array of numbers.
// R: we are to return the number that is needed to be added to the sum of the numbers to be equal to the next largest prime number.
// E: if given [2,3,4] (sum = 9) we are to return 2 since 11 is the next prime and 9 + 2 = 11.
// P: first we sum the numbers and check if it is prime, then add one and check again.


function minimumNumber(numbers){
    let sum = numbers.reduce((acc,c) => +acc + c, 0);
    let num = 0;

    
        while (true) {
            let isPrime = true
        
        
        for (let i = 2; i < Math.sqrt(sum + num); i++){
            if ((sum + num) % i === 0) {
                isPrime = false;
               
                break;
            }
        }
        if(isPrime) {
            return num
        }
        num++;
    }    
  }