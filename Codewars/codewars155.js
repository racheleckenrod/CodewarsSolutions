// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

// add the value "codewars" to the websites array 1,000 times

// describe("Tests", () => {
//     it("test", () => {
//   Test.expect(websites.length > 0, 'The array is still empty')
//   Test.expect(websites.length == 1000, 'The array does not equal 1,000')
//   Test.expect(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
//     });
//   });
//   PREP 
// the challange I see here is getting all this data into the proper format. 
// Parameters- I dont see that we are given any parameters at all... in the tests there is a hint of an e and to make a function take that parameter
// Results we are to have an array , websites, with a length of 1000 each element being 'codewars' 
// example 
// pseudocode: I'm going to try to make a function and do a for loop and add codewars 1000 times...

function allCodewars(){
    let websites = []
    for(let i = 0; i < 1000; i++){
        websites[i] = "codewars"
    }return websites
}
console.log(allCodewars())

// as expected the solution isn't passing the tests... going to go to discord

let websites = []
for(let i = 0; i < 1000; i++){
    websites[i] = "codewars"
}

// other solutions that passed the tests....
// var websites = new Array(1000).fill("codewars");

// var websites = [];
// while (websites.length < 1000) websites.push("codewars")