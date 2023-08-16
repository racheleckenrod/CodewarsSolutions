// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do'); 
//     });
//   });
  
// PREP
// P: we are given a string of coded words, with the first letter replaced by it's charCode, and the second and last letters switched.
// R: we are to return the deciphered code in a string
// E: see examples above.
// P: first we need to know what the number is, so we can put it in a variable, then get the letter it is with fromCharCode(variable) make a variable for the last letter, and set it equal to word.pop() which will both give us the letter and remove the last one from the word. get the first letter with shift() that will also remove it from the word, then add the variables together to make the deciphered word 
// there was an issue with the undefined coming up for shorter words that needed to be addressed with a ternary.
function decipherThis(str) {
    let arr = str.split(' ')
    let result = []
    


    for (let i = 0; i < arr.length; i++) {
        let num = []
        let last = ""
        let second = ""
        let word = arr[i].split("")
        for (let j = 0; j < word.length; j++) {
            if (!isNaN(word[j])) {
                num.push(word[j])
                console.log("word=", word, num)
                word.shift()
                console.log("word after=", word)
                j--
            } 
        }

        last = word.pop()
        second = word.shift()
        console.log(last,second,num)

        let decodedWord = String.fromCharCode(Number(num.join(''))) + (last ? last : '') + (word.length > 0 ? word.join('') : '') + (second ? second : '')

       result.push(decodedWord)
    }
    return result.join(' ')
    //have fun!
    }; 
    console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do')