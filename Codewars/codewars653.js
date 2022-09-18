// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
// var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.

// PREP
// Parameters:
// we are given two arrays of strings that each start with a unique letter.
// Results:
// we are to return an array with the elements  of a2 sorted so that the first letter of the words is the same as the first letter of the words in a1.
// Example:
// a1 = ['happy', 'birthday', 'crystal'}
// a2 = ['bob', 'helmet', 'child']
// would return ['helmet', 'bob', 'child']

// Pseudocode:
// if a2[j][0] === a1[i][0], push a2[j]

function sortArray(a1, a2) {
    let results = []
    for(let i = 0; i < a1.length; i++){
        for(let j = 0; j < a2.length; j++){
            if(a2[j][0] === a1[i][0]){
                results.push(a2[j])
            }
        }
    }
return results

}
console.log(sortArray(['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'], ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']))