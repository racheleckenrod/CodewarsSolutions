// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
// PREP 
// Parameters: given an array of words separated by a space
// results: return an array of strings with the length of the word added to the element, separated by a space.
// Examples if the string is "where is my cheese" the array returned is ["where 5","is 2","my 2","cheese 6"]

// Pseudocode:
// split(" ") into array, then forEach() push(" " +item.length) ?? that might work.. 

function addLength(str) {
    let arr = str.split(" ")
    arr2 = arr.map(element => element + " " + element.length)
    return arr2
}
    console.log(addLength('you will win'))