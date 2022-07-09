// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// // Note: Math.pow and some other Math functions like eval() and ** are disabled.
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(numberToPower(4, 2), 16);
//   Test.assertEquals(numberToPower(10, 4), 10000);
//   Test.assertEquals(numberToPower(10, 0), 1);
  
//     });
//   });
  


function numberToPower(number, power){
    let answer = 1
        for(let i = 0; i < power; i++){
            answer *= number
        }return answer
    }
    