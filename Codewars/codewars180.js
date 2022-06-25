// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
// tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(mango(3, 3), 6)
//   Test.assertEquals(mango(9, 5), 30)
//     });
//   });
  
// PREP
// given number of mangos and price per each, but also is a 3 for the price of 2 sale
// results return the price for all the mangos, taking into consideration the sale of 3 for 2.
// examples how many free mangos do you get? One per three you have. will have to subtract that number from the total and then multiply by the price per mango.
// Minus one for each multiple of three.
function mango(quantity, price){
    let freeMangos = Math.floor(quantity/3)
    return price * (quantity - freeMangos) 
}