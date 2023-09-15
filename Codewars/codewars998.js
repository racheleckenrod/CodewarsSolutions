// back·ro·nym
// An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

// "Biodiversity Serving Our Nation", or BISON

// (from https://en.oxforddictionaries.com/definition/backronym)

// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

// dict["P"] == "perfect"
// Examples
// "dgm" ==> "disturbing gregarious mustache"

// "lkj" ==> "literal klingon joke"
// FUNDAMENTALSSTRINGS

// PREP
// P: we are given a string of lowercase letters
// R: we are to return a string of words that are the values to the the keys of a preloaded dictionary (object) that has uppercase keys corresponding to each letter. 
// E: if given 'ab' we are to return 'awesome beautiful'
// P: we need a variable to return, say phrase. then loop through the given string, converting to uppercase, and getting the value from the dict object and concatanating it to the phrase variable. Make phrase an array so we can join it with spaces and not have any trailing spaces

//preload variable: dict

var makeBackronym = function(string){
    //your code here
    let phrase = []

    for (let i = 0; i < string.length; i++) {
        phrase.push(dict[string[i].toUpperCase()])
    }
    return phrase
  };