// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!


// const Test = require('@codewars/test-compat');

// describe("solve", function() {
//   it("should work when chosing notes is possible", function() {
//     Test.assertEquals(solve(770), 4, "Wrong result for 770");
//     Test.assertEquals(solve(550), 2, "Wrong result for 550");
//     Test.assertEquals(solve(10), 1, "Wrong result for 10");
//     Test.assertEquals(solve(1250), 4, "Wrong result for 1250");
//   });
  
//   it("should return -1 if chosing notes is not possible", function() {
//     Test.assertEquals(solve(125), -1, "Wrong result for 125");
//     Test.assertEquals(solve(666), -1, "Wrong result for 666");
//     Test.assertEquals(solve(42), -1, "Wrong result for 42");
//   });
// });
// PREP
// P: we are given a number between 0 and 1501
// R: we are to return the minium number of bills needed to match that amount or -1 if it is not possible. the bill amounts are: 10,20,50,100,200,500
// E: if given $350, we are to return 3. one for each a 200,100,and 50.
// P: i see to check if the number is greater than the bill, and if it is subtract that amount and add one to the count . return the count. these will be while loops


function solve(n) {
    let count = 0

    while (n >= 500) {
        n -= 500
        count++
    }

    while (n >= 200) {
        n -= 200
        count++
    }

    while (n >= 100) {
        n -= 100
        count++
    }

    while (n >= 50) {
        n -= 50
        count++
    }

    while (n >= 20) {
        n -= 20
        count++
    }

    while (n >= 10) {
        n -= 10
        count++
    }

    if (n !== 0) {
        return -1
    } else {
        return count
    }
    // Your code here
  }

  console.log(solve(125))