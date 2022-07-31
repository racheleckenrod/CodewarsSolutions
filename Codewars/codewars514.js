// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// const examples = [
//     ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
//     ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
//     ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
// ];

// describe("Sample Tests", function(){
//     for (const [text, expected] of examples) {
//         it('text: ' + JSON.stringify(text), function() {
//             assert.deepEqual(orderedCount(text), expected);
//         });
//     }
// });

// PREP
// Parameters:
// given astring
// Results:
// are to return a count of the charaters, including empty spaces
// var arr=[];
// for (var i=0; i<text.length; ++i)
// {
//    var k=0;
//    for (var j=0; j<arr.length; ++j)
//       if (arr[j][0]==text[i])
//           k++;
//     if (k==0)
//     {
//       for (var j=i; j<text.length; ++j)
//         if (text[j]==text[i])
//            k++;
//         arr.push([text[i],k]);
//      }
// }
// return arr;



var orderedCount = function (text) {
    let arr = []
    for (let i = 0; i < text.length; i++){
       let count = 0
       for (var j = 0; j < arr.length; j++)
    
    //    console.log( arr[j][0], text[j],text[i])
          if (arr[j][0] == text[i])
          
              count =+ 1
              console.log(count, "count", text[i], arr)
        if (count == 0){
          for (let j = i; j<text.length; j++)
            if (text[j] == text[i])
               count += 1
               console.log(text[i], count)
            arr.push([text[i],count]);
            console.log(j,i)
         }
    }
    console.log(arr)
    return arr
  
    // let arr = []
    // let count = 1
    // text = text.split('')

    // for(let i = 0; i < text.length; i++){
    //     for(let j = text.length; j > 0; j--){
    //         if(text[i] === text[j]){
    //             console.log(text[i])
    //             count += 1
              
             
    //             // console.log(count,text, text[i],j, text[j])
               
    //         }
            
    //     }
       
    //     arr.push([text[i], count])
    //     // arr.splice()
    //         count = 0
    // }
    // // Implement me!
    // return arr
  }
  console.log(orderedCount("abracadabra"))