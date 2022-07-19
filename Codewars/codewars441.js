// Introduction
// The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

// The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

// 'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
// Note: The dashes - in the example are added for readability and should not be included in the output.

// The Assignment
// Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

// Notes
// Only consonants should be modified; leave all other characters unchanged.
// Both upper and lower case characters will be tested.
// The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
// For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.
// Testing
// The tests will challenge your function with sentences of length 0-255, ASCII characters between 32-126 and nothing else.

// Links
// Check out these links for more information:

// https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket

// PREP
// Parameters
// we are given a string of words
// Results:
// are expected to return a new string in a code where every consonant is replace by three letters: the consonant,keeping it's case then an "O" with the same case as the consonant and then another one of the consonants it is replacing. vowels are to remain unchanged.
// example:
// hello would be expected to return hohelollolo.
// Pseudocode:
// dealing with the case. there is probably an easy way to deal with this using regexp, I'll try to do it without
// so first to test if the letter is a consonant, or probably not a vowel.. then to determine what case it is. I'm not sure how to repeat another of the some as it is yet..
// using arrays is probably the way to go 
// ok sweet, the vowel regexp is working- it wasn't after all and 


function robberEncode(sentence) {
    sentence = sentence.split('')
    let regex = /[BCDFGHJKLMNPQRSTVWXYZ]/i
    for(let i = 0; i < sentence.length; i++){
        if(regex.test(sentence[i])){
            if(sentence[i] === sentence[i].toUpperCase()){
                sentence[i] = sentence[i]+"O"+sentence[i]
            }else{
                sentence[i] = sentence[i]+"o"+sentence[i]
            }
        }
    }
    return sentence.join("")
  }

  console.log(robberEncode("Hello World"))