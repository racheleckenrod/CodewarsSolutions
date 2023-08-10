// DESCRIPTION:
// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(presses("LOL"), 9, "should work for simple examples")
// Test.assertEquals(presses("HOW R U"), 13, "should work for phrases with spaces")
//   });
// });

// PREP
// P: we are given a string containing letters, numbers and spaces
// R: we are to return the number of key presses needed to display the message in "multi-tap" keyboard.
// E: if given "I Love You" we are to return 3 + 1 + 3 + 3 + 3 + 2 + 1 + 3 + 3 + 2 or 24
// P: I'm not sure what the "try not to hard code the number of presses for the letters" means... I suppose it means not to do it the way I see to do it, giving each letter, number and space a value and counting them up. I can group them by the values that get the numbers- putting all the values that get one in one if statement, and so on.


function presses(phrase) {
    let arr = phrase.toUpperCase().split('')
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==="1" || arr[i]==="A" || arr[i]==="D" || arr[i]==="G" || arr[i]==="J" || arr[i]==="M" || arr[i]==="P" || arr[i]==="T" || arr[i]==="W" || arr[i]===" ") {
            count += 1
        } else  if(arr[i]==="B" || arr[i]==="E" || arr[i]==="H" || arr[i]==="K" || arr[i]==="N" || arr[i]==="Q" || arr[i]==="U" || arr[i]==="X" || arr[i]==="0") {
            count += 2
        } else  if(arr[i]==="C" || arr[i]==="F" || arr[i]==="I" || arr[i]==="L" || arr[i]==="O" || arr[i]==="R" || arr[i]==="V" || arr[i]==="Y" ) {
            count += 3
        } else  if(arr[i]==="2" || arr[i]==="3" || arr[i]==="4" || arr[i]==="5" || arr[i]==="6" || arr[i]==="S" || arr[i]==="8" || arr[i]==="Z") {
            count += 4
        } else  if(arr[i]==="7" || arr[i]==="9") {
            count += 5
        }
    }
    return count
  }

