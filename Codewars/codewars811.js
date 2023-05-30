// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// PREP
// Parameters: we are given an object
// Results: we are to return an array of names(keys) of languages where the value is 60 or greater listed in descending order of the score.
// Pseudocode:
// will need to sort somehow. Perhaps by calling the value in the sort function
// first get an array of languages with Object.keys(results)
// then filter the array with the values of the keys by using filter((value) => results[value] >= 60)
// then sort the Object keys left by the value of the key value pair using sort((a, b) => results[b] - results[a]) 
// testing to see if I can sort them alphabetically

function myLanguages(results) {
    return Object.keys(results).filter((item) => results[item] >= 60).sort((a, b) => results[b] - results[a])
}

console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}))