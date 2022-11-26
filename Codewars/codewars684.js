// Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

// their digits occur only once

// they are odd

// they are multiple of three

// nextNumb(12) == 15

// nextNumb(13) == 15

// nextNumb(99) == 105

// nextNumb(999999) == 1023459

// nextNumber(9999999999) == "There is no possible number that
// fulfills those requirements"
// Enjoy the kata!!

// describe("Example Tests", function() {
//     Test.assertEquals(nextNumb(12), 15)
//     Test.assertEquals(nextNumb(13), 15)
//     Test.assertEquals(nextNumb(99), 105)
//     Test.assertEquals(nextNumb(999999), 1023459)
//     Test.assertEquals(nextNumb(9999999999), "There is no\
//  possible number that fulfills those requirements")
// });

function nextNumb(val) { 
    for(let i = val; i < 9999999999; i++){
        let set = new Set(i.toString().split(""))
        // console.log(...set, i.toString().split(""))
        if(i.toString().split("").length == [...set].length && i % 2 != 0 && i % 3 == 0){
            return i
        }
        else{
            return "There is no possible number that fulfills those requirements"
        }
    }
 }
 console.log(nextNumb(13))