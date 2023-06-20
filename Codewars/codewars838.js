// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// const chai=require('chai')
// const {assert} = chai;
// chai.config.truncateThreshold = 0;

// describe('Testing...', function(){
//   it("Basic tests", () => {
//       let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
//       assert.deepEqual(wave("hello"), result, "Should return: '"+result+"'");

//       result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
//       assert.deepEqual(wave("codewars"), result, "Should return: '"+result+"'");

//       result = [];
//       assert.deepEqual(wave(""), result, "Should return: '"+result+"'");

//       result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
//       assert.deepEqual(wave("two words"), result, "Should return: '"+result+"'");

//       result = [" Gap ", " gAp ", " gaP "];
//       assert.deepEqual(wave(" gap "), result, "Should return: '"+result+"'");
//   });
// });


// PREP
// P: we are given a string that may be empty or contain spaces
// R: we are to return an array of strings that contain the given word(s) but with one of the letters capitalized, starting with the first one and continuing to the last one, skipping over any spaces.
// E: given "happy tile" we are to return ["Happy tile", "hAppy tile", "haPpy tile", "hapPy tile", "happY tile", "happy Tile", "happy tIle", "happy tiLe", "happy tilE"]
// P: a for loop here, with a check for if the element is a " ", and if it is, to skip it.break the string into an array, loop through and toUpperCase each one in turn and push the result to a new array and return it. will need to be a nested for loop to get multiple words to push. My original idea did not work for trailing spaces as it created an undefined.

// function wave(str){
//     let arr = str.split("")
//     let returnArr = []

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === " "){
//                 i++
//             } else {
//                 arr[i] = arr[i].toUpperCase()
//             }
//         }
//        returnArr.push(arr.join(""))
//        arr[i] = arr[i].toLowerCase()
//     }

//     return returnArr
//     // Code here
//   }


// use slice() instead of an additional for loop and splitting the string into an array:

function wave(str){
    let arr = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            continue
        }else {
            arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1))
        }
    }
    return arr
}

  console.log(wave(' gap '))

//   another good way to do it:

// function wave(str){
//     let result = [];
    
//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });
    
//     return result;
// }