// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// PREP
// Parameters:
// we are given a string
// Results:
// we are to return boolean of if the string is exactly 4 or 6 NUMBERS long
// Pseudocode:
// check length, then check for /[0-9]/ using every? or match


function validatePIN (pin) {
    if(pin.length != 4 && pin.length != 6){
        console.log("here?")
        return false
    }
    return pin.match(/[0-9]/g).join("") == pin
  }
  console.log(validatePIN("123456"))


//   top solution:
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }