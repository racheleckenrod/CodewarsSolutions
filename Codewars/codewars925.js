// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'")
//   Test.assertEquals(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'")
//   Test.assertEquals(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'")
//   Test.assertEquals(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'")
  
//     });
//   });
  

function makeString(s){
    let arr = s.split(' ')

    let result = []

    arr.forEach(item => {
        result.push(item[0].toUpperCase())
    })

    return result.join('')
    // ...
  }
  console.log(makeString('brown eyes are nice'))