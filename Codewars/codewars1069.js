// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.
// Examples
// loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
// MATHEMATICSFUNDAMENTALS

// describe("Tests", () => {
//     it("test", () => {
//   function seemilar(obj1,obj2){
//     for( var att in obj1 ){ if( obj1[att] != obj2[att] ) return false };
//     return true
//   };
//   Test.expect(seemilar(looseChange(56), {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}));
//   Test.expect(seemilar(looseChange(100),{'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 4}));
//   Test.expect(seemilar(looseChange(0),  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}));
//   Test.expect(seemilar(looseChange(-3), {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}),"no looseChange for -3 cents");
//   Test.expect(seemilar(looseChange(7.9),{'Nickels': 1, 'Pennies': 2, 'Dimes': 0, 'Quarters': 0}),"7.9 cents should be rounded down to 7");
  
//     });
//   });
  
// PREP
// P: we are given a number
// R: we are to return an object with {'Nickels': Num, 'Pennies': Num, 'Dimes': Num, 'Quarters': Num} with num being the number of each coin that makes up the least amount of coins that can be returned with the given amount. if the input is not valid we are to return the object with zero in all Num places. floats are to be rounded down
// E: if given 37 cents, we are to return {'Nickels': 0, 'Pennies': 2, 'Dimes': 1, 'Quarters':1}
// P: seems there was some trick to what I think is straightforward here, asking for if the value is greater than 25, and adding quarters until it is not, while subtracting 25 from the value, then do the same with 10, 5, and put the remaining in the pennies

function looseChange(cents){
    let coins = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters':0}

    cents = Math.floor(cents)
    if (cents < 0) {cents = 0}

    while (cents >= 25) {
        coins['Quarters'] += 1;

        cents -= 25;
    }
    while (cents >= 10) {
        coins['Dimes'] += 1;
        cents -= 10;
    }
    while (cents >= 5) {
        coins['Nickels'] += 1;
        cents -= 5;
    }
    coins['Pennies'] += cents

    return coins
    // ...
  }
  console.log(looseChange(100))