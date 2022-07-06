// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(fuelPrice(5, 1.23), 5.65);
//   Test.assertEquals(fuelPrice(8, 2.5), 18.40);
//   Test.assertEquals(fuelPrice(5, 5.6), 27.50);
//     });
//   });
// So the way I did this first didn't produce expected values...
// looks like what they are asking for here is to give the first 2 litres a discount of 5 cents, then the next two litres 10 cents then the next two litres 15 cents, 20 cents then 25 cents on all the rest of the litres.
// so I think we will need to keep track of how many litres are put in the cost, untill they add up to how many they buy...
// Second try didnt work either..
// 
// need to subtract 2 litres and check if there are more, if there are then take additional discount. It may be useful to do two things. 

// Alright, Looks like I have finally figured out what they are asking for so I can attempt to write code that WILL produce the expected value. actually much simplier than I made it to be... 
// looks like we need to determine the discount based on number of litres


function fuelPrice(litres, pricePerLitre) {
  console.log(litres,pricePerLitre)
    let cost = 0
    if(litres < 2){
        cost = litres * pricePerLitre
    }else if( litres < 4){
        cost =  litres * (pricePerLitre - .05)
    }else if(litres < 6){
        cost =  litres * (pricePerLitre - .10)
    }else if(litres < 8){
        cost =  litres * (pricePerLitre - .15) 
    }else if(litres < 10){
        cost =  litres * (pricePerLitre - .20)
    }else if(litres >= 10){
        cost =  litres * (pricePerLitre - .25)
    }
   
    return Number(cost.toFixed(2))
 }

  console.log(fuelPrice(8, 2.5))

//   18.40);

// Here's a great solution :
// function fuelPrice(litres, pricePerLiter) {
//     for (var i = 2; i <= 10; i +=2) { //discount loop
//       if (litres >= i) {
//         pricePerLiter -= 0.05;
//       }
//     }
//     return Math.round(litres * pricePerLiter * 100) / 100;;
//   }
  