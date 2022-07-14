// Consecutive Vowels
// You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

// This is better explained with a couple of examples:

// You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
// This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
// Note
// For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

// Good luck!
// PREP
// Parameters:
// we are given a string of lower case letters
// results:
// are to return a number of vowels that appear in order from the list of vowels- it needs to repeat.
// example: in the string "aseghikjokku" the return is 5 , aeiou is present in order. if there was another a it would then need to return 6 
// Pseudocode:  I'm thinking of a filter that would check for the first vowel, if it finds it, move to the second, when it gets to the end, start over from the beginning.

// I want to iterate over each letter in word to check to see if it the first vowel, if not move to the next letter in word. filter should be able to handle the job... but I may also be able to do it with a for loop, or an if statement, and the if might work better because we want to do something if it is... 




function getTheVowels(word) {
    let vowels = ['a','e','i','o','u']
    word = word.split("")
    let count = []
    let order = []
    console.log(word)
    let i = 0
    for(let j = 0; j < word.length; j++){
        if(i >= 5){
            i = 0
        }
        if(word[j] === vowels[i]){
            order.push(word[j])
            i++
        }else{
            console.log('test')
        }
        }
        return order.length
    }
    
//   }

console.log(getTheVowels('desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua'))

function getTheVowels(word) {
    let vowels = ['a','e','i','o','u']
    word = word.split("")
    let order = []
    let i = 0
    for(let j = 0; j < word.length; j++){
        if(i >= 5){
            i = 0
        }
        if(word[j] === vowels[i]){
            order.push(word[j])
            i++
        }
      }
        return order.length
    }