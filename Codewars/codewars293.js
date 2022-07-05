// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

// Pseudocode:
// first pass at it did not take into account that there are numbers that exceed the array length and must go around in the circle.
// so we need to get at the number in the array from the number given.
// example:
// if the array.length = 5,  and the number given is 8, will have to subtract array.length (multiple times if necessary) to get a number that will match an index (-1)... to  do that

// first check to see if goose-1 is less than or equal to array.length
// oh boy this calls for a while loop...

function duckDuckGoose(players, goose) {
    while(goose - 1 > players.length){
        goose = goose - players.length
    }
    if(goose - 1 <= players.length){
        return players[goose - 1].name
    }
}