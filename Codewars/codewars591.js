// Prerequirements

// This kata is the second part of the Barista Problem. I strongly encourage you to solve that one first.

// Context

// You got your RAISE!! YAY!!
// But now, time has passed, and a position has opened up for Barista Manager.

// Description

// In order to be promoted to the rank of manager, you must prove that you have the skills required, such as managing more than one coffee machine. So your boss gives you access to a number of coffee machines that all require the same amount of time to clean. Like before, ignore the time taken to write down the orders and focus only on the time needed to clean the machines and the time needed to brew each coffee.

// Task

// Given a list of orders and a number of coffee machines, you must return the minimum time needed for all of the customers to wait for their coffee, so the sum of all the waiting times.

// Note that

// Some customers may ask you for just a glass of water, so that means that the time you would need to "brew" their "coffee" is 0. Also, you do not need to clean anything in this case. The time you need to fill up the glass of water is also insignificant in comparison to brewing a coffee. Water is free in this cafetaria. :)
// The cleaning time for all coffee machines is 2 minutes.
// These coffee machines include a self-cleaning system, so they can all begin cleaning themselves immediately after a coffee is made.
// The time you need to walk from a coffee machine to another one, or with the coffee cup to a customer, is insignificant.
// You only have access to these machines, so you can brew up to second parameter coffees at the same time.
// If you receive the following orders [2,3,4] and you have 2 coffee machines, you could choose to brew the third and the second coffee first, so the third customer has to wait 4 minutes, and the second one has to wait 3 minutes. After that you clean the first (or the second) coffee machine, which that takes 2 minutes. Let's say that you choose to clean the first coffee machine so that means that the first customer has to wait 3 minutes for the second customer's coffee + 2 minutes for the cleaning + 2 minutes for his coffee to finish brewing. In total that would add up to 14 minutes. This is not necessarily the minimum time needed.
// There may be no orders, which means that you will have to repeat the contest another day.
// The number of coffee machines will always be smaller than or equal to the number of all of the orders you receive (water glasses included) (your boss won't give you more than you can actually use, nor read the orders themselves, just count them :) ).
// There is also a person hired to clean all the coffee machines after you go home, so they are all clean the next day.
// You choose in what order you brew the coffees.
// Examples

// [0,0,1] , 1 => 1
// [2,3,4] , 1 => 22 
// [2,3,4] , 2 => 13 
// [2,3,4] , 3 => 9 
// Limits

// 0 <= number of orders <= 30
// 0 <= size of orders <= 40
// 0 <= coffee machines <= number of orders
// Special Thanks to the great Discord community for helping with the creation of this kata and also to the programmers that helped a lot in the " discuss " section.
// const chai = require("chai");
// const assert = chai.assert;

// describe("Fixed Test Cases", function() {
//   it("given [0,0,1], 1", function() {
//     assert.deepEqual(barista([0,0,1], 1), 1);
//   });
//   it("given [2,3,4], 1", function() {
//     assert.deepEqual(barista([2,3,4], 1), 22);
//   });
//   it("given [2,3,4], 2", function() {
//     assert.deepEqual(barista([2,3,4], 2), 13);
//   });
//   it("given [2,3,4], 3", function() {
//     assert.deepEqual(barista([2,3,4], 3), 9);
//   });

// });

// PREP
// Parameters: This time we are given an array of numbers representing the time it takes per order and a number of coffee machines available to make the coffee.
// Results: We are to return the total wait time for all customers.

// I remember seeing something like this before... 
function barista(coffees, cMachines){
  let wait = []
  let time = 0
  let sum = 0
  coffees = coffees.filter((item) => item !== 0)
  let newOrder = coffees.sort((a,b) => a - b)
  if(newOrder.length < 1){
          return 0
      }else if(cMachines >= coffees.length){
        wait = coffees
        sum = wait.reduce((acc,c) => +acc + +c,0)
        
         return sum
      }else if(cMachines === 1){
       
        for(let i = 0; i < newOrder.length; i++){
            time += newOrder[i]
           wait.push(time)
           time += 2
        }
        sum = wait.reduce((acc,c) => +acc + +c,0)
        
         return sum
      }else{
        let tills = new Array(cMachines).fill(0)
        console.log(tills, newOrder)
        for(let c of newOrder){
          
           let next = tills.indexOf(Math.min(...tills))
         
           console.log("next=", next, "tills[next]=", tills[next])
           time = tills[next]
           sum += tills[next]
          if(tills[next] !== 0){
            time += 2
          }
          time += c
          console.log("c=", c, "time=", time)
          tills[next] = time
         
           console.log("tills=", tills)
        }
        
      
        sum += tills.reduce((acc,c) => +acc + +c,0)
    console.log("sum=", sum)
     return sum
  }
}
  
  
  console.log(barista([2,4,1,8,3], 2))

  // 1 + 2+4 , 2 + 2+8 , 3
  // with two lines
  // correct answer is 33
  // 1 + 2+3  + 2+8,  2 + 2+4
  // 1 + 5(+1) + 10(+ 1+5+1) , + 8
  // 7 + 17 , + 8
  // 32






// function barista(coffees){
//     let newOrder = coffees.sort((a,b) => a - b)
//     let wait = []
   
//     let time = 0

//     for(let i = 0; i < newOrder.length; i++){
//         time += newOrder[i]
//        wait.push(time)
//        time += 2
//     }
    
//     let sum = wait.reduce((acc,c) => +acc + +c,0)
    
//      return sum
//   }

// Supermarket cue 

// function queueTime(customers, n) {
//   if(customers.length < 1){
//       return 0
//   }else if(n >= customers.length){
//       return Math.max(...customers) 
//   }else if(n === 1){
//       return customers.reduce((acc,c)=> +acc + +c,0)
//   }else{
//       let tills = new Array(n).fill(0)
//       for(let p of customers){
//           let next = tills.indexOf(Math.min(...tills))
//           tills[next] += p
//       }
//       return Math.max(...tills)

//   }
// }