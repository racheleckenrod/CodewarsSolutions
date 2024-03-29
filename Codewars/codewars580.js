// Translations appreciated

// Background information
// The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.
// In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:

// [ + ] It's simple to implement
// [ + ] Compared to other versions of hamming code, we can correct more mistakes
// [ - ] The size of the input triples
// Task 1: Encode function
// Implement the encode function, using the following steps:

// convert every letter of the text to its ASCII value;
// convert ASCII values to 8-bit binary;
// triple every bit;
// concatenate the result;
// For example:

// input: "hey"
// --> 104, 101, 121                  // ASCII values
// --> 01101000, 01100101, 01111001   // binary
// --> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
// --> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated
// Task 2: Decode function:
// Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:

// 111 --> 101 : this can and will happen
// 111 --> 11 : this cannot happen
// Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.

// Steps:

// Split the input into groups of three characters;
// Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
// Take each group of 8 characters and convert that binary number;
// Convert the binary values to decimal (ASCII);
// Convert the ASCII values to characters and concatenate the result
// For example:

// input: "100111111000111001000010000111111000000111001111000111110110111000010111"
// --> 100, 111, 111, 000, 111, 001, ...  // triples
// -->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
// --> 01101000, 01100101, 01111001       // bytes
// --> 104, 101, 121                      // ASCII values
// --> "hey"
// If you liked this kata, please try out some of my other katas:
// Crack the PIN
// Decode the QR-Code
// Hack the NSA







function encode(text) {
    text = text.split('')
    let binary = text.map(item => item.charCodeAt(0).toString(2).padStart(8,0))
    console.log(binary)
    binary = binary.join('').split('')
    let tripled = binary.map(item => item.repeat(3)).join('')
    return tripled
  }
  
  function decode(bits) {
    let triples = []
    for(let i = 0; i < bits.length; i += 3){
        triples.push(bits.slice(i, i+3))
    }
    let corrected = []
    for(let i = 0; i < triples.length; i++){
        if(triples[i] === '000' || triples[i] === '001' || triples[i] === '010' || triples[i] === '100'){
            corrected.push(0)
        }else{
            corrected.push(1)
        }
    }
    let bytes = []
    for(let i = 0; i < corrected.length; i += 8){
        bytes.push(corrected.slice(i, i+8).join(''))
    }
    let ascii = []
    for(let i = 0; i < bytes.length; i++){
        ascii.push(parseInt(bytes[i], 2))
    }
    let char = []
    // return ascii
    for(let i = 0; i < ascii.length; i++){
        char.push(String.fromCharCode(ascii[i]))
    }
    return char.join('')
  }

  console.log(encode("hey"))
  console.log(decode("100111111000111001000010000111111000000111001111000111110110111000010111"))