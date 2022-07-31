// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// const { strictEqual } = require('chai').assert;

// function doTest(input, expected) {
// 	const actual = findChildren(input);
// 	strictEqual(actual, expected, `for "${input}"\n`);
// }

// describe("tests suite", function () {
// 	it("Some tests", function () {
// 		doTest("beeeEBb", "BbbEeee");
// 		doTest("uwwWUueEe", "EeeUuuWww");
// 		doTest("abBA", "AaBb");
// 		doTest("AaaaaZazzz", "AaaaaaZzzz");
// 		doTest("CbcBcbaA", "AaBbbCcc");
// 		doTest("xXfuUuuF", "FfUuuuXx")
// 	});
// });

// PREP 
// Parameters:
// we are given a string of a combination of upper and lower case letters.
// Results: 
// are to return a string, alphabeticalized with uppercase letters directly preceeding the lowercase letters of the same value.

// Pseudocode:
// we know that there is exactly one uppercase letter for all the lowercase ones, maybe we could convert it all to lowercse sort it then change the first letter of each to uppercase. I dont know what sort will do on its own so I think I'll find out before getting too fancy with anything else

// I'm thinking of doing a loop that checks to see if the elements are the same and then changing the first one to uppercase, but I dont quite know how to check for all the rest of the children and then capitalize the next parent

// 
function findChildren(dancingBrigade) {
    let newArr = []
    let arr = dancingBrigade.split("")
    sorted = arr.sort()
    arr = arr.join("")

    for(let i = 0; i < sorted.length; i++){
        // match uppercase letters with the lowercase letters and put them in a newArr.
        if(arr.charCodeAt(i) > 64 && arr.charCodeAt(i) < 91){
            newArr.push(sorted[i])
            for(let j = 0; j < sorted.length; j++){
                if(sorted[i].toLowerCase() === sorted[j])
                newArr.push(sorted[j])
            }
        }
    }
   
    console.log(arr,sorted)

    // console.log(arr.match(/[a-z]\d+/gi));
   
    // let letters = []
    
    //     letters = arr.match(/[arr[0]]/gi)
    
    //     newArr.push(letters)
    //     arr = arr.split('')
    //     console.log(arr)
    //     arr.shift()
    //     console.log(arr)
    //     letters = arr.join('').match(/arr[0]/gi)
    //     // let ters = arr.match(/[A-E]/gi)
    //     // arr = arr.split("").splice(0, letters.length).join('')
    //     newArr.push(letters)

    //     // arr = arr.split('')
    //     arr.shift()
    //     console.log(arr)
    //     letters = arr.join('').match(/[arr[0]]/gi)
    //     // letters = arr.match(/[A-E]/gi)
    //     // arr.split("").splice(0, letters.length)
    //     newArr.push(letters)
    
	return newArr.join("")
}
console.log(findChildren("zZaaaAuwwWUueEe"))