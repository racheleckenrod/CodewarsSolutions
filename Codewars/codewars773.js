// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// turn the word into array, check each letter for being a capital 

var capitals = function (word) {
	let array = word.split("")
    let nums = []
    for(let i = 0; i < array.length; i++){
        if(array[i].toUpperCase() === array[i]){
            nums.push(i)
        }
    }

return nums

};
console.log(capitals("Word"))