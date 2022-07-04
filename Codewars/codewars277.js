// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(converter(10), 3.54)
//   Test.assertEquals(converter(20), 7.08)
//   Test.assertEquals(converter(30), 10.62)
//     });
//   });
  
// PREP-
// parameters- given miles per gallon
// to return kilometers per liter (to two decimal places)
// 1 mile = 1.609344 kilometers
// 1 gallon = 4.54609188 litres

// miles / gal = 1.609344km / 4.54609188L
// 

function converter (mpg) {
    return Math.round(mpg * (1.609344 / 4.54609188) * 100) / 100
    //code to convert miles per imperial gallon to kilometers per liter
  }