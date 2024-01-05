// You need to create a function that will validate if given parameters are valid geographical coordinates.

// Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

// Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

// Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

// There should be no space between the minus "-" sign and the digit after it.

// Here are some valid coordinates:

// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -3
// And some invalid ones:

// 23.234, - 23.4234
// 2342.43536, 34.324236
// N23.43345, E32.6457
// 99.234, 12.324
// 6.325624, 43.34345.345
// 0, 1,2
// 0.342q0832, 1.2324


// describe("Tests", () => {
//     it("test", () => {
//   var ValidCoordinates = [
//       "-23, 25",
//       "4, -3",
//       "24.53525235, 23.45235",
//       "04, -23.234235",
//       "43.91343345, 143"
//     ];
//   for( i in ValidCoordinates ) {
//     Test.expect(isValidCoordinates(ValidCoordinates[i]), ValidCoordinates[i] + " validation failed.");
//   }
  
//   var InvalidCoordinates = [
//       "23.234, - 23.4234",
//       "2342.43536, 34.324236",
//       "N23.43345, E32.6457",
//       "99.234, 12.324",
//       "6.325624, 43.34345.345",
//       "0, 1,2",
//       "0.342q0832, 1.2324",
//       "23.245, 1e1"
//     ];
//   for( i in InvalidCoordinates ) {
//     Test.expect(!isValidCoordinates(InvalidCoordinates[i]), InvalidCoordinates[i] + " validation failed.");
//   }
//     });
//   });
  
// P: we are given a string containing what should be two coordinates.
// R: we are to return true if the coordinates are valid, false otherwise.
// E: there is to be a comma and space separating the floats, no space after the "-" sign, no letters, and the first value is to be between +-0 and 90, while the second value is to be between +- 0 and 180

function isValidCoordinates(coordinates){
    let arr = coordinates.split(", ")
    if (/[a-zA-Z]/.test(coordinates)) return false
    if ( arr[0] >= -90 && arr[0] <= 90 && arr[1] >= -180 && arr[1] <= 180 ) return true;
    
    return false
  }
