// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Pseudocode:
// keeping me on my toes here with the methods... I need to extract the first letter of each word, capitalize it and join it with a "."
// seem ease enough, but i dont remember hoew to do it. the kata doesnt explicitly say if the name parameter is a string or an array. splitting it should put it in an array, how do I select the element [0] and then the  character at index [0] of that?

function abbrevName(name){
    let initials = name.split(' ')
    initials = initials.map(initial => initial[0]).join(".").toUpperCase()
    return initials
    // code away

}
console.log(abbrevName("rachel eckenrod"))