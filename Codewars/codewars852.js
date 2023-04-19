// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


// const Test = require('@codewars/test-compat');

// describe("Solution", function(){
//   it("EncryptExampleTests", function(){    
//     Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
//     Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
//     Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
//     Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
//     Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
//     Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
//     Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
//   });
// });

// describe("Solution", function(){
//   it("DecryptExampleTests", function(){    
//     Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
//     Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
//     Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
//     Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
//     Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
//     Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
//     Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
//   });
// });

// describe("Solution", function(){
//   it("Null or Empty", function(){    
//     Test.assertEquals(encrypt("", 0), "");
//     Test.assertEquals(decrypt("", 0), "");
//     Test.assertEquals(encrypt(null, 0), null);
//     Test.assertEquals(decrypt(null, 0), null);
//   });
// });


// PREP:
// P: we are given a string and a number
// R: we are to return a string that has been encrypted the number number of times. the encryptions is as follows: the string is to be the concatonation of the odd indicies and then the even indicies, and this process is to be repeated number number of times. In addition we are to have another function that reverses the process.
// E: given '123456' , 2 we would return (2,4,6,1,3,5 for number one, then again 4,1,5,2,6,3 for number 2 and in a string it would be "415263". then to decode, we need the number 2, and 415263 would be to separate into 415 263, take the first element from the evens (would have been zero) then the first element from odds (would have been one) 2,4,6,1,3,5, then again: 246 135 becomes 1,2,3,4,5,6. when working with an odd number length, 1234567, 2 becomes 2,4,6,1,3,5,7 then 4,1,5,2,6,3,7. so to decode, when splitting the string, we split it into  4,1,5 and 2,6,3,7. taking the first element of each starting with the second, we have 2,4,6,1,3,5,7. splitting again the same way yeilds, 2,4,6 and 1,3,5,7 then to reverse again, we have 1,2,3,4,5,6,7. so that works to floor the split and have the first half smaller than the second half.
// P: for the encoding: split into array and a for loop to push into two arrays then join them?


// function encrypt(text, n ) {
//     let arr = text.split('')
//     let evens = []
//     let odds = []
    

//     function repeatLoop(result){

       

//         for (let j = 0; j < n; j++){

//             result = once(result)
    
//         }
//         return result
//     }
   


//     function once(arr){

//             for(let i = 0; i < arr.length; i++){
//             if(i % 2 === 0){
//                 evens.push(arr[i])
//             }else {
//                 odds.push(arr[i])
//             }
//         }
//         return  [...odds, ...evens]
//     }
//     let encryptedArr = repeatLoop(arr)
//     return encryptedArr.join
       

// }

// console.log(encrypt("012345", 3))



// function encrypt(text, n ) {
//     let result = ''

//     for (let i = 0; i < n; i++){
//         let evens = ''
//         let odds = ''

//         for(let j = 0; j < text.length; j++){
//             if (j % 2 === 0) {
//                 evens += text[j]
//             }else {
//                 odds += text[j]
//             }
//         }

//         result = odds + evens
//         text = result
//     }

//     return result
// }




// function decrypt(encryptedText, n) {
//     let result = encryptedText

//     for (let i = 0; i < n; i++){
//         let evens = ''
//         let odds = ''

//         for (let j = 0; j < result.length; j++) {
//             if (j % 2 === 0) {
//                 evens += result[j]
//             } else {
//                 odds += result[j]
//             }
//         }

//         result = ''
//         for (let j = 0; j < evens.length; j++) {
//             result += odds[j] + evens[j]
//         }

//         if (odds.length < evens.length) {
//             result += evens[evens.length - 1]
//         }
//     }
//     return result
// }


// code that passes tests:

function encrypt(S, N) {
    if (S === '' || N <= 0 || S === null) {
      return S;
    }
  
    let result = S;
  
    for (let i = 0; i < N; i++) {
      let evens = '';
      let odds = '';
  
      for (let j = 0; j < result.length; j++) {
        if (j % 2 === 0) {
          evens += result[j];
        } else {
          odds += result[j];
        }
      }
  
      result = odds + evens;
    }
  
    return result;
  }
  
  function decrypt(encryptedText, N) {
    if (encryptedText === '' || N <= 0) {
      return encryptedText;
    }
  
    const len = encryptedText.length;
    const mid = Math.floor(len / 2);
  
    for (let i = 0; i < N; i++) {
      let odds = encryptedText.slice(0, mid);
      let evens = encryptedText.slice(mid);
      let result = '';
  
      for (let j = 0; j < evens.length; j++) {
        result += evens[j] + (j < odds.length ? odds[j] : '');
      }
  
      encryptedText = result;
    }
  
    return encryptedText;
  }