// Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

// Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

// Examples:

// n =  1:    ["#010101"]
// n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
// As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

// Black: #000000 and white: #ffffff are not accepted values.

// When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

// Have fun!

// PREP
// Parameters:
// given an integer n
// Results:
// are to return an array of n number of hexidecimal values, with a few exceptions.
// the values #000000 and #ffffff are not to be used.
// if n is negative, we are to return an empty array
// if n > 254 we are to return an array of 254 values.

// the array is to be sorted in ascending order
// the hexidecimal values are to use lowercase letters
// Examples:
// n = 3
// should return ["#010101", "#020202", "#030303"]

// Pseudocode:
// can make a temp variable called hex that will start at #010101 and increment by one each time. breaking it down, since all values will repeat the incremented portion a total of three times, we can add that to the string value of "#" then push the temp value into the end of the grey array. and stop when we reach 254. 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f. trying to decide if it is worth it to use the anscii code and add one to the value, or if it would be better accomplished by just if/then statements. probably better to use the numerical values of the letters, putting conditionals on the incrementing when the value reaches f, and then increment the first digit in the pair.
// so we will have (skip 00) then go to 01,02,03,04,05,06,07,08,09,0a,0b,0c,0d,0e,0f, then once we get to 0f, increment the 0 to 1 and go through the series: 10,11,12,13,14,15,16,17,18,19,1a,1b,1c,1d,1e,1f. then increment the 1 to a 2 and go again.. keeping track til you get to the given n. and taking care to stop and return when you complete the series with the 254 values. repeating the temp to a total of three and including a "#" at the beginning of the string.
// we will check each digit of the temp variable separately, and increase it by one, and if the digit is f, increse the first variable by one, and set the second to 0. repeat to three times add to the "#" and push 
// strings are immutable, so we must use an array for the hex value.
// we have the return array, grey, that will have a value in it to 


// function shadesOfGrey(n){
//     let grey = []
//     let temp = ["#00"]
//     let charCode 
//     let firstHex
//     if(n <= 0){
//         return grey
//     }else if(n > 254){
//         n = 254
//     }
//     for(let i = 0; i < n; i++){
       
//        console.log(temp[0].codePointAt(2), "test", temp)
       
//        if(temp[0].codePointAt(2) < 57){
//         firstHex = temp[0].codePointAt(1)
//         charCode = temp[0].codePointAt(2)
//         charCode += 1
//         temp = [String.fromCharCode(35, firstHex, charCode, firstHex, charCode, firstHex, charCode)]
//         // console.log(temp)
//         grey.push(temp)
//         // console.log(grey)

//        }else if(temp[0].codePointAt(2) === 57){
     
//         firstHex = temp[0].codePointAt(1)

//         charCode = 97

//         temp = [String.fromCharCode(35,firstHex, charCode, firstHex, charCode, firstHex, charCode)]
//         grey.push(temp)
//        }else if(temp[0].codePointAt(2) >= 97 && temp[0].codePointAt(2) < 102){
//         console.log("checking")
//         firstHex = temp[0].codePointAt(1)
//         charCode += 1
//         temp = [String.fromCharCode(35,firstHex, charCode, firstHex, charCode, firstHex, charCode)]
//         grey.push(temp)
//        }else if(temp[0].codePointAt(2) === 102){
//         firstHex = temp[0].codePointAt(1)
//             if(firstHex < 57){
//                 console.log("OR", firstHex)
//                 firstHex += 1
//                 charCode = 48
//                 temp = [String.fromCharCode(35,firstHex, charCode, firstHex, charCode, firstHex, charCode)]
//                 grey.push(temp)
//             }
//             else if(firstHex === 57){
//             //     console.log("else")
//                 firstHex = 97
//                 charCode = 48
//                 temp = [String.fromCharCode(35,firstHex, charCode, firstHex, charCode, firstHex, charCode)]
//                 grey.push(temp)

//             }else if(firstHex > 57){
//                 firstHex += 1
//                 charCode = 48
//                 temp = [String.fromCharCode(35,firstHex, charCode, firstHex, charCode, firstHex, charCode)]
//                 grey.push(temp)
//             }
//        }

//     }
   
//     return grey.flat(1)

// }
// console.log(shadesOfGrey(220))

// I know I did this a hard way, but I wanted to see it through and I did

function shadesOfGrey(n) {
    var shades = []
    
    for (var i = 1; i <= Math.min(n, 254); i++) {
      var grey = ('0' + i.toString(16)).slice(-2)
      shades.push('#' + grey + grey + grey)
    }
    
    return shades
  }

  function hexing(n) {
    let greys = []
    let grey 
    for (let i = 0; i < n; i++){
        grey = i.toString(16)
        greys.push(grey)
    }
    return greys
  }
  console.log(hexing(77))

//   much simpler and I won't likely do the long hard way again, and am glad to see the the toString(16) method actually outputting the letter/number combos.