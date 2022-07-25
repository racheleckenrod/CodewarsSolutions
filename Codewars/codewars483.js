// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"
// Pseudocode:
// to check the individual word for exactly one ! will need to check both the end and the index before the end. 

// it really helps to know what we are trying to do, because I got it to do what I wanted but that is not really what they were asking for !!

function remove (string) {
    string = string.split(" ")
       for(let i = string.length - 1; i >= 0 ; i--){
           if(string[i].indexOf("!") !== -1 && string[i].indexOf("!") === string[i].lastIndexOf("!")){
               string.splice(i,1)
           }
       }
       return string.join(' ')
     }
  console.log(remove("Hi! !!Hi !Hi ! Hi!! Hi!"))




// function remove (string) {
//     string = string.split(" ")
//     for(let i = 0; i < string.length; i++){
      
//         if(string[i][string[i].length - 2] !== "!" && string[i].endsWith("!")){
//             string[i] = ""
//             console.log(string[i])
//         }
//     }
//     return string.join(' ').trim()
//   }

 