// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// PREP
// Parameters: given an array with exactly one wolf in it, and the rest sheep
// Results: are to return one of two strings, either to the wolf or to the sheep about to be eaten.
// examples- if wolf is at the end of the array, return string to wolf, else, return string to sheep immediately one more past the wolf along to the end of the array (index plus one)
// I think best way to do this is find the index of the wolf, then see if it is at the end - if so return wolf's message, if not, return message with index plus one to the sheep at risk of being eaten.


function warnTheSheep(queue) {
    if(queue.indexOf('wolf') === queue.length - 1){
        return `Pls go away and stop eating my sheep`
    }else{
        return `Oi! Sheep number ${queue.length - (queue.indexOf('wolf') + 1)}! You are about to be eaten by a wolf!`
    }

}
// took a bit of refactoring to pass the tests...