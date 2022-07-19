// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"


function sevenAte9(str) {
    str = str.split("")
    let x
  for(let i = 0; i < str.length; i++){
  
    if(str[i] === "9" && str[i-1] === "7" && str[i+1] === "7"){
        str[i] = ""
    }
  }return str.join("")
}

console.log(sevenAte9("165561786121789797"))