// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

// Notes:
// In the result codes and their values are in the same order as in M.
// See "Samples Tests" for the return.

// const assert = require('chai').assert
// describe("Tests", () => {
//   it("test", () => {
//     let b,c,res
//     b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
//     c = ["A", "B", "C", "D"]
//     res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
//     assert.strictEqual(stockList(b, c), res)

//     b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
//     c = ["A", "B"]
//     res = "(A : 200) - (B : 1140)"
//     assert.strictEqual(stockList(b, c), res)
//   });
// });

// PREP
// P: we are given two arrays of data. the first one contains strings of letter cominations and a space and a number representing the number of copies of a particular book.
// R: we are to return a string containing the sums of the numbers of books begining with the letters given in the second array.
// E: if given  array1 = ['BBBB 10', 'BBBC 12', 'CBBB 10', 'AAAA 13'] and array2 = ['A', 'B', 'C'] we are to return a string with the following format: "(A: 13) - (B: 22) - (C: 10)"
// we are to return the string with the letters in the same order as given in the second string.
// P: we can search through the first array to see what strings begin with the letter given in the second array, then get and/or add the value stored there to the variable we are going to push into a new array. after all the letters (and the values) are pushed, we will join them with " - " to achieve the correct format. when pushing, we will push the parentheses with the values. so we will be making a string and then pushing it into an array.


function stockList(listOfArt, listOfCat){
    if(listOfArt.length < 1 || listOfCat.length < 1) return ""

    let res = []

    let artArr = listOfArt.map(item => item.split(' '))
    

    for (let i = 0; i < listOfCat.length; i++) {
        let x = 0
        for (let j = 0; j < artArr.length; j++){
            
            if(listOfCat[i] === listOfArt[j][0]){
                x += +artArr[j][1]
                console.log(x, listOfCat[i], listOfArt[j][0])
            }
            console.log("2", x, listOfCat[i], listOfArt[j][0])
        }
        console.log("3",x, listOfCat[i], )
        res.push(`(${listOfCat[i]} : ${x})`)
    }
    
    return res.join(" - ")
    // ... 
  }

  console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))