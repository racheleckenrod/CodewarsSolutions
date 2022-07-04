// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}


function charFreq(message) {
    let obj = {}
    
    for(let character in message){

        let char = message[character];
        
        (obj[char]) ? obj[char]++ : obj[char] = 1
    }
    return obj
    // awesome counter code
    }

    console.log(charFreq("oh my gosh I am making an object"))

    function getFrequency(message) {

        let obj2 = {};
    
        for (let character in message) {
    
             let char = message[character];        
             (obj2[char]) ? obj2[char]++ : obj2[char] = 1
    
        }
    
        return obj2;
    
    };

    console.log(getFrequency("here is my string"))