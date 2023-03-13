// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// describe("Sample tests", function() {
//     it("Tests", function() {
//       assert.equal(encode('hello'), 'h2ll4');
//       assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
//       assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
//       assert.equal(decode('h2ll4'), 'hello');
//     });
//   });

// PREP
// P: we are given a string of letters that contains lowercase vowels
// R: we are to replace those vowels with a number corresponding to a=1, e=2, i=3, o=4, u=5
// E: if given "hello world" we are to return "h2ll4 w4rld"
// P: id like to do this and decode with an object storing the vowel/value pairs.  and replace the vowels with the key of the object contianing the vowels as values? my brute force method is a list of if/then statements looping through each element in the split string. can I use regex to find the vowels then the object to select the value to use...?

let obj = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
}

function encode(string) {
    let regex = /[aeiou]/g
    return string.replace(regex, match => {
        for (let key in obj) {
            if (obj[key] === match) {
                return key
            }
        }
    })
    
  }
  
  function decode(string) {
    let regex = /[12345]/g
    return string.replace(regex, match => obj[match])
    
  }

  console.log(encode("hello"), decode("h2ll4"))