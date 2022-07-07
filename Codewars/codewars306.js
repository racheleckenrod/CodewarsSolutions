// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!
// PREP
// Parameters: Given two strings of a first and last name.
// Results: are to return a hacker name from the var firstName and var surname objects that each have uppercase letters as their keys and a string value for the values. we are to take the first letter in the given strings and return the two corresponding strings from the objects. if the first letter is not a letter, are to return "Your name must start with a letter from A - Z."

function aliasGen(realFirstName, lastName){
    let firstLetter = realFirstName[0].toUpperCase()
    let lastLetter = lastName[0].toUpperCase()
    let hackerName = `${firstName[firstLetter]} ${surname[lastLetter]}`
    if(firstLetter == firstLetter.toLowerCase() || lastLetter == lastLetter.toLowerCase()){
        return "Your name must start with a letter from A - Z."
    }else{
        return hackerName
    }
}