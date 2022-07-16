// Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// function isEven(num) {
//   return num % 2 === 0;
// }
// var seq = [2,4,6,8,1,2,5,4,3,2];

// dropWhile(seq, isEven) // -> [1,2,5,4,3,2]
// Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.


// describe("the dropWhile function", function () {

//     function isEven(num) {
//       return num % 2 === 0;
//     }
    
//     var isEvenTests = [
//     [[2,6,4,10,1,5,4,3], [1,5,4,3]],
//     [[2,100,1000,10000,5,3,4,6],[5,3,4,6]],
//     [[2,4,10,100,64,78,92],[]]];
  
//     it("should be defined", function() {
//       Test.assertSimilar(dropWhile([], isEven), []);
//     });
    
//     it("should work when testing for even numbers", function() {
//       Test.randomize(isEvenTests).forEach(function (val,ind,arr) {
//         Test.assertSimilar(dropWhile(val[0], isEven), val[1]);
//       });
//     });
  
//   });
// Pseudocode:
// at first pass I missed the part about the longest sequence that passed and wrote a function that more simply tested each value by using the filter method. In order to stop the process from checking any further after one odd number is found such that it returns an empty array if there are no odds in the original
  

function dropWhile(arr, pred) {
    return arr.filter(pred)
  }

  console.log([2,6,4,10,1,5,4,3])


//   Here's a solution I found online:

// function dropWhile(arr, pred) {
//     while (arr.length && pred(arr[0])) arr.shift()
  
//     return arr
//     }

// it doesnt seem to satsify the "should not mutated the original" I thought I read in the instructions, but it does pass the tests

// Here is one that does satisfy that requirement:
// function dropWhile(arr, pred) {
//     for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
//     return arr.slice(i)
//   }

// I like how they accessed the individual elements of the array- I wasn't sure how to go about that.

// Another solution that did get through with an approacj I took

// function dropWhile(arr, pred) {
//     const idx = arr.findIndex(elem => !pred(elem));
//     return idx < 0 ? [] : arr.slice(idx);
//   }

// I tried to use the filter() with the ! and I was unsuccessful- this works:
// function dropWhile(arr, pred) {
//     var result = [];
    
//     for (var i=0; i<arr.length; ++i)
//       if (!pred(arr[i]))
//         break;
    
//     return arr.slice(i);
//   }