// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


function correctPolishLetters (string) {
    string = string.replace(new RegExp("ą", "g"), "a")
    string = string.replace(new RegExp("ć", "g"), "c")
    string = string.replace(new RegExp("ę", "g"), "e")
    string = string.replace(new RegExp("ł", "g"), "l")
    string = string.replace(new RegExp("ń", "g"), "n")
    string = string.replace(new RegExp("ó", "g"), "o")
    string = string.replace(new RegExp("ś", "g"), "s")
    string = string.replace(new RegExp("[źż]", "g"), "z")
  
    return string
  }

  console.log(correctPolishLetters("Jędrzej Błądziński"))

//   I do like the other solutions I saw using split and join and replacing the letters in the array