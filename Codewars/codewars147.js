// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
    let spl = []  
    spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++){
    
      if(spl[i].length > longest) {
        longest = spl[i].length
      }
    } return longest
}

console.log(findLongest('what could the possible outcome be'))