// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

// describe("example tests", function() {
//     Test.assertEquals(queueTime([], 1), 0);
//     Test.assertEquals(queueTime([1,2,3,4], 1), 10);
//     Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
//     Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);
    
//     //add some more example tests here, if you like
    
//     })

// PREP
// Parameters:
// we are given an array of integers and a number.
// The array represents each shopper and the time it will take to check out, while the number represents the number of tills the shoppers have to use.

// Results:
// we are to return a number- representing the total time it takes for all the shoppers to check out.

// example
// [3,4,5,6,7,8], 3

// we would need to take the first three numbers and put them in eacha new line, and when the first one finishes, it should take the next number (forth) from the array and add it to the first number in the array... we will need to check the values of the arrays made from the number to see where the next number in the array will go. so in our example, there will be three new arrays, or variables... I dont know how to create n number of variables or arrays... 

// using the constructor of new Array(n)  looks like a viable solution.. I dont quite know why we would need to use a fill method on it... I see.. we are making ONE new array with a length of n-1, each element representing a till/line and adding the times of the customers into the element of the array. we fill it with zeros because we want to start at zero for each line.

// one thing we could check for is if n is greater than the length of the array, and if it is, return the largest number.

// then if n is smaller than the length of the array... we have a problem that we can handle... 
// so we have an n that is greater then 1 and less than the number of customers. 


// and the other case would be, n = 1, add up all the numbers in the array. 

// 


function queueTime(customers, n) {
    if(n >= customers.length){
        return Math.max(...customers)
    }else if(n === 1){
        return customers.reduce((acc,c)=> +acc + +c,0)
    }else{
        let tills = new Array(n).fill(0)
        console.log(tills)
        for(let p of customers){
            let next = tills.indexOf(Math.min(...tills))
            tills[next] += p
        }
        return Math.max(...tills)

    }
    //TODO
  }
  console.log(queueTime([2,2,3,3,5,4], 4))