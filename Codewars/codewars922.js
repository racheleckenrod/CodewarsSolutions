// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
//     });
//   });
  
// PREP
// P: we are given a number
// R: we are to return a string with the prime factors and the exponents
// E: given 14 we are to return "(2)(7)"
// P: we could test the number for being prime, then start diving it by increasing numbers repeatedly. starting with 2, and keep track of how many times you do divide into it and put those numbers into the return, for example 12- (2**1) (6) => (2**2)(3)- so until find a new prime.


// function primeFactors(n){
//     let results = []
//     let exp = 0
//     let index = 0

//     //your code here
// }

function primeFactors(number) {

    let results = []
    let exp = 0


    if (number <= 1) {
        return ''
    }

    while (number % 2 ===0) {
        number /= 2
        exp++
    }

    if (exp > 0) {
        results.push(`(2${exp > 1 ? `**${exp}` : ""})`)
    }
    for (let i = 3; i <= Math.sqrt(number); i+= 2) {
        exp = 0

        while (number % i === 0){
            number /= i 
            exp++
        }

         if (exp > 0) {
                results.push(`(${i}${exp > 1 ? `**${exp}` : ""})`)
            }

        } 
    
    
        if (number > 1) {
            results.push(`(${number})`)


        }

        return results.join('')
    }

    

console.log(primeFactors (488))