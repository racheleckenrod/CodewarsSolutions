
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(incrementString("foobar000"), "foobar001");
//   Test.assertEquals(incrementString("foo"), "foo1");
//   Test.assertEquals(incrementString("foobar001"), "foobar002");
//   Test.assertEquals(incrementString("foobar99"), "foobar100");
//   Test.assertEquals(incrementString("foobar099"), "foobar100");
//   Test.assertEquals(incrementString(""), "1");
//     });
//   });
  

function incrementString (strng) {
    strng = strng.split("")
    let string = strng.map(item => +item)
    console.log(strng, string)
    let num = []
    for(let i = string.length - 1; i >= 0; i--){
        if(!isNaN(string[i])){
            num.unshift(string[i])
            console.log(num)
        }
    }
    let numLength = num.length
    console.log(numLength)

    num = Number(num.join(''))
   
    num += 1
    num = num.toString().padStart(numLength,0)

    console.log(num)
    strng.splice(strng.length - numLength, numLength,num)
    return strng.join("")


    // return incrementedString
  }
  console.log(incrementString("foobar001"))