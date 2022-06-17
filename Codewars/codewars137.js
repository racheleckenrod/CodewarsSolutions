// Subtract the sum
// NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

// Complete the function which get an input number n such that n >= 10 and n < 10000, then:

// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.
// Example
// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315 (not in the list)
// sum = 3+1+5 = 9
// n = 315-9 = 306 (not in the list)
// sum = 3+0+6 = 9
// n =306-9 = 297 (not in the list)
// .
// .
// .
// ...until you find the first n in the list below.

// There is no preloaded code to help you. This is not about coding skills; think before you code

// 1-kiwi
// 2-pear
// 3-kiwi
// 4-banana
// 5-melon
// 6-banana
// 7-melon
// 8-pineapple
// 9-apple
// 10-pineapple
// 11-cucumber
// 12-pineapple
// 13-cucumber
// 14-orange
// 15-grape
// 16-orange
// 17-grape
// 18-apple
// 19-grape
// // 20-cherry
// // 21-pear
// // 22-cherry
// // 23-pear
// // 24-kiwi
// // 25-banana
// // 26-kiwi
// // 27-apple
// // 28-melon
// // 29-banana
// // 30-melon
// // 31-pineapple
// // 32-melon
// // 33-pineapple
// // 34-cucumber
// // 35-orange
// 36-apple
// 37-orange
// 38-grape
// 39-orange
// 40-grape
// 41-cherry
// 42-pear
// 43-cherry
// 44-pear
// 45-apple
// 46-pear
// 47-kiwi
// 48-banana
// 49-kiwi
// 50-banana
// 51-melon
// 52-pineapple
// 53-melon
// 54-apple
// 55-cucumber
// 56-pineapple
// 57-cucumber
// 58-orange
// 59-cucumber
// 60-orange
// 61-grape
// 62-cherry
// 63-apple
// 64-cherry
// 65-pear
// 66-cherry
// 67-pear
// 68-kiwi
// 69-pear
// 70-kiwi
// 71-banana
// 72-apple
// 73-banana
// 74-melon
// 75-pineapple
// 76-melon
// 77-pineapple
// 78-cucumber
// 79-pineapple
// 80-cucumber
// 81-apple
// 82-grape
// 83-orange
// 84-grape
// 85-cherry
// 86-grape
// 87-cherry
// 88-pear
// 89-cherry
// 90-apple
// 91-kiwi
// 92-banana
// 93-kiwi
// 94-banana
// 95-melon
// 96-banana
// 97-melon
// 98-pineapple
// 99-apple
// 100-pineapple

// PREP 
// Parameters given a number >= 10 and < 10000. it will be a two, three, or four digit number.
// Return a fruit. fruits corespond to a number between 1 and 100. 
// Examples n = 9999 ; sum = 9+9+9+9 = 36; 9999 - 36 = new n = 9963;
// sum = 9+9+6+3 = 27; new n 9963 - 27 = another new n = 9936

// Pseudocode: take n, make it a string, then turn it into an array with split, then use reduce to find the sum of all the digits. do a conditional to check if the value is between 1 and 100 so we can return the fruit, or not. if it is not between 1 and 100, make the new n a string, split it into an array, sum the digits, then check again for if it is between 1 and 100.


function SubtractSum(n){
    let newN
    let fruit = {
        1: "kiwi",
        2: "pear",
        3: "kiwi",
        4: "banana",
        5: "melon",
        6: "banana",
        7: "melon",
        8: "pineapple",
        9: "apple",
        10: "pineapple",
        11: "cucumber",
        12: "pineapple",
        13: "cucumber",
        14: "orange",
        15: "grape",
        16: "orange",
        17: "grape",
        18: "apple",
        19: "grape",
        20: "cherry",
        21: "pear",
        22: "cherry",
        23: "pear",
        24: "kiwi",
        25: "banana",
        26: "kiwi",
        27: "apple",
        28: "melon",
        29: "banana",
        30: "melon",
        31: "pineapple",
        32: "melon",
        33: "pineapple",
        34: "cucumber",
        35: "orange",
        36: "apple",
        37: "orange",
        38: "grape",
        39: "orange",
        40: "grape",
        41: "cherry",
        42: "pear",
        43: "cherry",
        44: "pear",
        45: "apple",
        46: "pear",
        47: "kiwi",
        48: "banana",
        49: "kiwi",
        50: "banana",
        51: "melon",
        52: "pineapple",
        53: "melon",
        54: "apple",
        55: "cucumber",
        56: "pineapple",
        57: "cucumber",
        58: "orange",
        59: "cucumber",
        60: "orange",
        61: "grape",
        62: "cherry",
        63: "apple",
        64: "cherry",
        65: "pear",
        66: "cherry",
        67: "pear",
        68: "kiwi",
        69: "pear",
        70: "kiwi",
        71: "banana",
        72: "apple",
        73: "banana",
        74: "melon",
        75: "pineapple",
        76: "melon",
        77: "pineapple",
        78: "cucumber",
        79: "pineapple",
        80: "cucumber",
        81: "apple",
        82: "grape",
        83: "orange",
        84: "grape",
        85: "cherry",
        86: "grape",
        87: "cherry",
        88: "pear",
        89: "cherry",
        90: "apple",
        91: "kiwi",
        92: "banana",
        93: "kiwi",
        94: "banana",
        95: "melon",
        96: "banana",
        97: "melon",
        98: "pineapple",
        99: "apple",
        100: "pineapple"}
    do{let sum = 0
    
    sum = n.toString().split('').reduce((acc, c) => +acc + +c,0)
    console.log("sum", sum)
    console.log(n)
    newN = n - sum
    n = newN
    }while(newN > 100)

    console.log(newN)
    return fruit[newN]
  }

  console.log(SubtractSum(22))