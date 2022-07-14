// Task
// Write a method, that replaces every nth char oldValue with char newValue.

// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
// Example:
// n:         2
// old_value: 'a'
// new_value: 'o'
// "Vader said: No, I am your father!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// "Vader soid: No, I am your fother!"
// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

// Pseudocode:
// first we have to find the nth occurance of the "old value", then change it to the new value, and then find the next nth occurance and change that one too etc to end of string,
// I think a similar process as last time with incrementing within a loop will work.

function replaceNth(text, n, oldValue, newValue) {
    let arr = text.split("")
    let i = 1
    for(let j = 0; j < arr.length; j++){
        if(i < n && arr[j] === oldValue){
            
                i++
            console.log(i)
        }else if(i === n && arr[j] === oldValue){
            arr[j] = newValue
            i = 1
        }
    }return arr.join("")
    
}
console.log(replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'))