// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
// ALGORITHMS
// Ad
// Qualified A

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(getIssuer(4111111111111111), 'VISA');
// Test.assertEquals(getIssuer(378282246310005), 'AMEX');
// Test.assertEquals(getIssuer(9111111111111111), 'Unknown');
//   });
// });

// PREP
// P: we are given a number
// R: we are to return a string corresponding to the type of card the number is from or 'Unknown'
// E: if given 23333 we are to return 'unknown'
// P: we can convert the number to a string, check if it startsWith the correct numbers and has the correct length to pass each test for the known return strings or return 'Unknown'


function getIssuer(number) {
    let str = number.toString()

    if (str.length === 15) {
        if (str.startsWith('34') || str.startsWith('37')) {
            return "AMEX"
        } else {
            return "Unknown"
        }
    } else if (str.length === 16) {
        if (str.startsWith('6011')) {
            return "Discover"
        } else if (str.startsWith('51') || str.startsWith('52') || str.startsWith('53') || str.startsWith('54') || str.startsWith('55')) {
            return "Mastercard"
        } else if (str.startsWith('4')) {
            return "VISA"
        } else {
            return "Unknown"
        }
    } else if (str.length === 13) {
        if (str.startsWith('4')) {
            return "VISA"
        } else {
            return "Unknown"
        }
    } else {
        return "Unknown"
    }
    // Code your solution here
  }