// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// For everything else, don't return anything (return null in C#, None in Rust).
// (+ has no visible effects so we can safely ignore it.)

// PREP
// Parameters
// given an input of a single character- could be a number or letter.
// are to return the input if it is equal to "Q" if it is equal to "H" - then return "Hello World!"  Or if it is equal to 9 return the big string of 99 bottles of beer on the wall. I think the best way to do that is to run a template literal on a loop. 
// example-
// if 9, return for (let i= 99; i > 1; i--){
    // make a variable and add the verse with the ${i} in it til you get to the end then end it with the appropiate ending and return the whole thing.
// }

function HQ9(code) {
    if(code === "H"){
        return "Hello World!"
    }else if(code === "Q"){
        return code
    }else if(code === 9){
        let verse = ""
        for(let i = 99; i > 2; i--){
            verse += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n`
        }return verse + `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
  }

  console.log(HQ9(9))