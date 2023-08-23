// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke
// STRINGSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Solution", function() {
//     it("Example Tests", function() {
//       Test.assertEquals(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
//                         "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
//       Test.assertEquals(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
//                         "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
//     });
//   });

// PREP
// P: we are given a string with menu items all one word
// R: we are to return a string with the menu items capitalized, separated by a space and in order of the menu
// E: if given "pizzamilkshakepizza" we are to return "Pizza Pizza Milkshake"
// P: a series of regex matches with the menu items. capitalize the first letter and join the array with spaces


function getOrder(input) {
    let arr = []
    let result = []
    let burger = input.match(/burger/g)
    let fries = input.match(/fries/g)
    let chicken = input.match(/chicken/g)
    let pizza = input.match(/pizza/g)
    let sandwich = input.match(/sandwich/g)
    let onionrings = input.match(/onionrings/g)
    let milkshake = input.match(/milkshake/g)
    let coke = input.match(/coke/g)
    arr.push(burger, fries, chicken, pizza, sandwich, onionrings, milkshake, coke)
    arr = arr.flat()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            let item = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
            result.push(item)
        }
    }

    return result.join(' ')
  }
  console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
                          "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke")