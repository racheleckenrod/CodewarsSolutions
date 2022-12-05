// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:

// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:

// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
// FUNDAMENTALSSTRINGS

// function testing(actual, expected) {
//     Test.assertEquals(actual, expected);
// }

// describe("Basic tests",function() {
// it("containAllRots",function() {
//     testing(containAllRots("", []), true)
//     testing(containAllRots("", ["bsjq", "qbsj"]), true)
//     testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
//     testing(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
// })})

// PREP
// Parameters:
// we are given a string and an array of strings.
// Results:
// we are to return true if the array contains all rotations of the string we are given.
// Pseudocode:
// will need a way of generating the rotations to check the array, and a way to keep track of if it is included in the array.


function containAllRots(strng, arr) {
    let strArr = strng.split('')
    let word = ''
    for(let i = 0; i < strArr.length; i++){
        word = strArr.slice(i).join('') + strArr.slice(0,i).join('')
        if(!arr.includes(word)){
            return false
        }
    }
    return true
}
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)