// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    //your function here
    return (beast.split('').pop() === dish.split('').pop()) && (beast.split('').shift() === dish.split('').shift())
    
    }

    console.log(feast("brown bear", "bear claw"))

    // got it right, but forgot the parentheses on pop() the first time... was able to solve the problem with my code without too much trouble.. Pretty proud of myself on this one