// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

// Fortunately, I discovered that the virus hides my censored letters inside root directory.

// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

// uncensor("xyz", "") ➜ "xyz"
// Notes
// Expect all discovered letters to be given in the correct order.
// Discovered letters will match the number of censored ones.
// Any character can be censored.
// PREP
// Parameters:
// we are given two strings. The first one contains "*" in place of some of the characters and the second string contains the replacements for the astricks, in order.
// Results: we are to return the corrected string.
// examples:
// if given h*ll* , eo  : we would be expected to return hello.
// pseudocode:
// this seems to be a good candidate for some regexp replace, but I am also thinking that a loop would do it . could find the index of the "*" then make it equal to the first character of the second string- probalbly split the strings in to arrays. 


function uncensor(infected, discovered) {
    infected = infected.split("")
    discovered = discovered.split("")
    let j = 0
    let x
    for(let i = 0; i < infected.length; i++){
        x = infected.indexOf('*')
        if(x === -1){
            return infected.join("")
        }else{
            infected[x] = discovered[j]
            j++
        }
    }
    return infected.join("")
  }
  console.log(uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae'))