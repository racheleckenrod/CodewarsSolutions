// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;

// describe("Tests", () => {
//     it("test", () => {
//   function add(x) {
//       return x + 10;	
//   }
  
//   function mult(x) {
//       return x * 30;
//   }
  
//   Test.assertEquals(chain(2, [add, mult]), 360, "Error: chain function does not work");
//     });
//   });
  

function add(num) {
      return num + 1;
    }
    
    function mult(num) {
      return num * 30;
    }
    

function chain(input,[add,multi]) {
    return multi(add(input))
    }

    function add(num) {
        return num + 1;
      }
      
      function multi(num) {
        return num * 30;
      }
      
//   really proud of myself:
  function chain(input,fun) {
    console.log(fun,input)
    for(let i = 0; i < fun.length; i++){
      input = fun[i](input)
    }
      return input
      }

    //   i see many people usig the reduce 