// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    let arr = s.split("").filter((el) => el == Number(el) && el !== " ").join("")
    console.log(arr)
    return Number(arr.toString())
  }

  console.log(getNumberFromString("$100 100 000"))

//   ended up going with this: 

function getNumberFromString(s) {
    let arr = s.split("").filter((el) => el >= 0 && el !== " ").join("")
    return Number(arr)
}