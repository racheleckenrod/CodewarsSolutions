// Make Chocolates
// Halloween is around the corner and we have to distribute chocolates. We need to assemble a parcel of goal grams of chocolates. The goal can be assumed to be always a positive integer value.

// There are small chocolates (2 grams each) and big chocolates (5 grams each)
// To reach the goal, the chocolates (big and small) must be used as-is, meaning, the chocolates cannot be broken into smaller pieces
// Maximize the use of big chocolates that are available to achieve the desired goal. And only then should you proceed to use the small chocolates.
// NOTE: "Maximize" does not imply you have to use all the available big chocolates before using the small chocolates
// For example, consider the goal of 6, and big=1, small=3. Using the existing one big chocolate, it is not possible to achieve the remainder of the weight of 1. Therefore, avoid using the big chocolate. Use the existing 3 small chocolates and achieve the goal.
// Determine the number of small chocolates that are required to achieve the desired parcel weight.

// Write a function make_chocolates that will accept three integer values as arguments, in the following order:

// small -> number of small chocolates available
// big -> number of big chocolates available
// goal -> the desired weight of the final parcel
// The function should return the number of small chocolates required to achieve the goal. The function should return -1 only if the goal cannot be achieved by any possible combination of big chocolates and small chocolates.

// Example
// make_chocolates (4, 1, 13) => 4  
// make_chocolates (4, 1, 14) => -1  
// make_chocolates (2, 1, 7) => 1  

// # using the big chocolate prevents goal 
// # accomplishment, therefore don't use it!
// make_chocolates (3, 1, 6) => 3  


// const chai = require("chai");
// const assert = chai.assert;

// describe("makeChocolates", function() {
//   it("should test the examples", function() {
//     assert.equal(makeChocolates(4, 1, 13), 4);
//     assert.equal(makeChocolates(4, 1, 14), -1);
//     assert.equal(makeChocolates(2, 1, 7), 1);
//     assert.equal(makeChocolates(3, 1, 6), 3);
//     assert.equal(makeChocolates(8, 0, 7), -1);
//     assert.equal(makeChocolates(8, 0, 7), -1);
//   });
// });
// small chocolates 2g ea
// big chocolates 5g ea

// if goal - 5 

// Pseudocode:
// 

// return the number of small chocolates required to achieve 
// the desired goal. Return -1 if the goal cannot be achieved 
function makeChocolates(small, big, goal) {
    if(goal > (big * 5) + (small * 2) ){
        return -1
    }else if(goal === (big * 5) + (small * 2)){
        return small
    }else if(big === 0 && goal % 2 !== 0){
        return -1
    }else if(goal % 5 === 0 && big >= goal / 5){
        return 0
    }else if((goal - (5 * big)) % 2 === 0){
        if(small * 2 >= goal - (5 * big)){
            return (goal - (5 * big)) / 2
        }else{
            return -1
        }
    }
}
  


// heres what i got 

// return the number of small chocolates required to achieve 
// the desired goal. Return -1 if the goal cannot be achieved 
function makeChocolates(small, big, goal) {
    console.log(goal, big, small)
      if(goal < 2){
        return -1
      }else if(goal > (big * 5) + (small * 2) ){
          return -1
      }else if(goal === (big * 5) + (small * 2)){
          return small
      }else if(big === 0 && goal % 2 !== 0){
          return -1
      }else if(goal % 5 === 0 && big >= goal / 5){
          return 0
      }else if((goal - (5 * big)) % 2 === 0){
        console.log("^^")
          if(small * 2 >= goal - (5 * big) && goal >= 5){
            console.log("$$")
            if(Math.floor(goal / 5)> big){
              return (goal - (big * 5))/2
            }else if(Math.floor(goal / 5) <= big){
               return (goal - (5 * Math.floor(goal / 5) )) / 2
            }else if(goal === small * 2){
              return small
            }
             
          }else{
              return -1
          }
      }else if(goal % 2 === 0 && 2 * small >= goal){
        console.log("*")
        while(big > 0 && goal > 6){
          goal -= 5
          big--
        }
        return goal / 2  
        }else if(big >= 1 && goal - 5 % 2 === 0){
        return (goal - 5)/2
    
        }else if( (goal / 5)  <= (big * 5) + (small * 2)){
         if(goal - 5 * Math.floor(goal / 5) % 2 !== 0){
           
           console.log("***")
           console.log(Math.floor(goal/5), (goal - 5 * Math.floor(goal / 5)) + 5) / 2
           
            if(Math.floor(((goal - 5 * Math.floor(goal / 5)) + 5) / 2) !== ((goal - 5 * Math.floor(goal / 5)) + 5) / 2){
              console.log("99")
              return -1
  //           }else if((goal - 5 * Math.floor(goal / 5) + 5) / 2  % 2 !== 0){
  //              return -1
               
            }else if(((goal - 5 * Math.floor(goal / 5) + 5) / 2) > small){
              console.log("66", (goal - 5 * Math.floor(goal / 5) + 5) / 2, small )
              return -1
             
            }else{
              if(Math.floor(goal / 5) > big && goal % 2 !== 0){
                return ((goal - (big * 5)) + 5) / 2
              }
               return (goal - 5 * Math.floor(goal / 5) + 5) / 2
            }
           }    
        }
      
  }
  





// after working with the code i think i can do a better job


// we have a few things to consider, 

function makeChocolates(small, big, goal) {

    if(Math.floor(goal / 5 ) <= big && small >= (goal - (Math.floor(goal / 5) * 5) + 5) / 2){
        if(goal % 2 === 0){
            return goal - (Math.floor(goal / 5) * 5) / 2
        }else{
            return (goal - (Math.floor(goal / 5) * 5) + 5) / 2
        }
    }else if(Math.floor(goal / 5 ) <= big + (small * 2) ){
        if(goal % 2 == 0){
            
            return (goal - (big * 5)) / 2
        }else{
            return (goal - (big * 5) - 5) / 2
        }
    }


}


// return the number of small chocolates required to achieve 
// the desired goal. Return -1 if the goal cannot be achieved 
function makeChocolates(small, big, goal) {
    console.log(goal, big, small)
      if(goal === 0){
        return 0
      }if(goal < 2){
        return -1
      }else if(goal > (big * 5) + (small * 2) ){
          return -1
      }else if(goal === (big * 5) + (small * 2)){
          return small
      }else if(big === 0 && goal % 2 !== 0){
          return -1
      }else if(goal % 5 === 0 && big >= goal / 5){
          return 0
       }else if(Math.floor(goal / 5 ) <= big && small >= (goal - (Math.floor(goal / 5) * 5) + 5) / 2){
        if(goal % 2 === 0){
          console.log((goal - (Math.floor(goal / 5) * 5) + 5) / 2, "Pop", goal, Math.floor(goal / 5), goal - (Math.floor(goal / 5) * 5)  )
          if(goal - Math.floor(goal / 5) * 5 < 2){
            return goal / 2
          }else if(goal - Math.floor(goal / 5) * 5 >= 2){
            console.log((goal - (Math.floor(goal / 5) * 5) + 5) / 2)
            if( goal % 2 === 0){
              if(Math.floor(goal / 5) % 2 === 0){
                return (goal - (Math.floor(goal / 5) * 5) + 5) / 2
              }else if(Math.floor(goal / 5) % 2 !== 0){
                 return (goal - (Math.floor(goal / 5) * 5) ) / 2
              }
             
            }else if(goal % 2 !== 0){
               return (goal - (Math.floor(goal / 5) * 5) + 5 ) / 2
            }
           
          } 
          
        }else if(goal % 2 === 0){
          console.log("not")
            return (goal - (Math.floor(goal / 5) * 5) ) / 2
        }else if(goal % 2 !== 0){
          console.log("++")
          if(Math.floor(goal/5) % 2 === 0){
            return (goal - (Math.floor(goal / 5) * 5) + 5) / 2
          }else if(Math.floor(goal/5) % 2 !== 0){
             return (goal - (Math.floor(goal / 5) * 5) ) / 2
          }
         
        }
        
      }else if(Math.floor(goal / 5 ) <= big + (small * 2) ){
        console.log("*")
          if(Math.floor(goal/5) % 2 !== 0){
            console.log("!!")
            return (goal - (big * 5) + 5) / 2
          }else if(Math.floor(goal/5) % 2 !== 0){
            console.log("!@")
            return (goal - (big * 5)) / 2
          }else if(goal % 2 == 0 && (goal - (big * 5)) % 2 === 0 && ((goal - (big * 5)) / 2) > 0){
              console.log("**")
              return (goal - (big * 5)) / 2
          }else if(goal % 2 !== 0 && big >= Math.floor(goal / 5) && 2 * small >= goal - (Math.floor(goal/5) * 5 )){
            console.log("&&",(goal - ( 5 * Math.floor(goal / 5)) ) / 2)
              return (goal - ( 5 * Math.floor(goal / 5)) ) / 2
          }else if(goal % 2 !== 0 && big < Math.floor(goal / 5)){
            console.log("re")
            if(goal - (big * 5) % 2 !== 0){
              console.log("@@")
              
              return (goal - (big * 5) ) / 2
            }else{
              console.log("##")
               return (goal - (big * 5)) / 2
            }
           
          }else if(goal - 2 * small === 0){
            return small
          }else{
            return -1
          }
      }
  
  
  }
  









//     if(goal - 5 < 5 || (goal - 5) % 2 !== 0){
//         if(goal % 2 === 0){
//             if(small * 2 >= goal){
//                 return goal / 2
//             // }else{
//             //     return -1
//             }
//         }
//     }else if(goal <= 5 * big){
//         if( ){

//         }
//     }
//     return -100;
//   }

// oops I pushed this one before its ready