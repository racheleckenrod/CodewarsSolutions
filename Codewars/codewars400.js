// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or 
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
// Note
// You can see other examples for each language in "Your test cases"

// PREP
// Given an array of strings
// if length of array is al least two, are to return an array of arrays with all the combinations of two element strings- with the words as separators. 
// for Example:
// if given ['one','two','three',four']
// we are to return ['one', 'two three four'],['one two' , 'three four'],['one two three' , 'four']

// Pseudocode:
// going to need a loop of some kind to create the array elements for the bigArr. I am not sure how to distinguish between the words to make the break in the small arr to give back a two element array. indexOf() seems like a possibility. I'll look up find() Maybe I could use a method that would find the first space and make it into the arr, then the next iteration check the new arr for the next first space and make that into the next arr etc.. 

// function testing(actual, expected) {
//     Test.assertSimilar(actual, expected);
// }

// describe("partlist",function() {
//   it("1st Basic tests", function() {
//     testing(partlist(["I", "wish", "I", "hadn't", "come"]),
//         [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
//     testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]), 
//         [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
//     testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]), 
//         [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
//   })
// })

// function partlist(arr) {
//     let y = arr.length
//     let newArr = [""]
//     let bigArr = []
//     arr = arr.toString()
//     let x = arr.indexOf(",")
//     console.log(arr)
//     // now to break apart the string into two strings and put each one into its own element of arr- so we can check the second string for the next space and make a new set of two strings and put each one of those into an arr.

//     for(let i = 0; i < y - 1; i++){
//         x = arr.indexOf(",")
//         console.log("x=" ,x)
//         newArr[0] = newArr[0]+arr.substring(0,x)+ " "
//         newArr[1] = arr.substring(x+1)

       
//         console.log("newArr=",newArr)
//         arr = newArr[1]
//         console.log("arr=",arr,"bigArr=",bigArr)
//     }
//     return 
// }

// I dont think this way of approaching this challange will work out because of the spaces and commas. I really have no idea why the push() method is working the way it is, in that the newArr is not getting pushed one at a time into the bigArr I made to accept each iteration which is sort of working with the commas though and I dont think those will pass the tests. I am abondoning this approach.
function partlist(arr) {
    let x = arr.length
    let bigArr = []
    let arr2 = arr.join(' ')
    for(let i = 0; i < x - 1; i++){
        arr2 = arr2.slice(arr2.indexOf(" ") + 1)
        bigArr.push([[arr.slice(0,i+1)],[arr2]])
        // console.log(bigArr)
        // bigArr.push([arr.join(' ').slice(0, arr2.indexOf(" "))])
        console.log(bigArr)
    }
    
    return  bigArr
}

console.log(partlist((["I", "wish", "I", "hadn't", "come"])))

function partlist(arr) {
    let x = arr.length
   let bigArr = []
   let arr2 = arr.join(' ')
   for(let i = 0; i < x - 1; i++){
       arr2 = arr2.slice(arr2.indexOf(" ") + 1)
       bigArr.push([arr.slice(0,i+1).join(" "),arr2])
       // console.log(bigArr)
       // bigArr.push([arr.join(' ').slice(0, arr2.indexOf(" "))])
       console.log(bigArr)
   }
   
   return  bigArr
}


function partlist(arr) {
    let x = arr.length
   let bigArr = []
   let arr2 = arr.join(' ')
   for(let i = 0; i < x - 1; i++){
       arr2 = arr2.slice(arr2.indexOf(" ") + 1)
       bigArr.push([arr.slice(0,i+1).join(" "),arr2])
   }
   
   return  bigArr
}


// I like this solution too:
// function partlist(arr) {
//   var parts = [];
//   for(var i = 1; i < arr.length; i++) {
//     parts.push([arr.slice(0, i).join(' '), arr.slice(i, arr.length).join(' ')]);
//   }
//   return parts;
// }