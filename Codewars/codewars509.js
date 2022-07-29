// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

// Notes:

// Messages are composed of only letters and digits
// Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
// Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
// If the message is an empty string, you should return true

// PREP
// Parameters:
// we are given a string composed of letters and numbers 
// results:
// we are to return a boolean stating if the string is in the following format:
// a number and then a substring that ia the length of that string.

// example: 5hello2hi would return true while 5hellohi2 would return false

// Pseudocode:
// im thinking to use the regex to split on numbers... I could also use typeOf and a for loop, adding in spaces maybe a while loop to get the letters after the number. Maybe split will work with typeOf... ok not that, the numbers ae strings anyway


// function isAValidMessage(message){

//     message = message.split(/(\d+)/)
   
//     for(let i = 1; i < message.length; i +=2){
       
//         if(i == [i + 1].length){
//             message = true
//         }else{
//             return false
//         }
//     }   
//     return message
//     // your code
//   }

  console.log(isAValidMessage("3hey5hello2hi"))

  function isAValidMessage(message){
    message = message.split(/(\d+)/)
    let check = ""
    if(message == "") return true
     
      for(let i = 1; i < message.length; i +=2){
          if(message[i] == message[i + 1].length){
              check = true
          }else{
              return false
          }  
      } 
      return check
  }