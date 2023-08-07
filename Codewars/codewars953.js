// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(calc(""), 0, "Should work with empty string");
// Test.assertEquals(calc("3"), 3, "Should parse numbers");
// Test.assertEquals(calc("3.5"), 3.5, "Should parse float numbers");
// Test.assertEquals(calc("1 3 +"), 4, "Should support addition");
// Test.assertEquals(calc("1 3 *"), 3, "Should support multiplication");
// Test.assertEquals(calc("1 3 -"), -2, "Should support subtraction");
// Test.assertEquals(calc("4 2 /"), 2, "Should support division");

//   });
// });

// PREP
// P: we are given a string of numbers and operators
// R: we are to return the value that the string evaluates to when read in polish notation, where the operator follows the number it refers to rather than proceeds it.
// E: given "1 2 +" we are to return 3
// P: convert string to array, loop through until we get to an operand, evaluate each operand in order. seems like a recursive function?  perhaps can replace the elements on the fly, like with 5 1 2 + 4 * + 3 -, loop through til we get to operand "+" and somehow replace 1 2 + with 3. so that when we encounter "*" we can replace 3 4 * with 12. then when we get to the next "+" we can replace 5 12 + with 17, and when we get to the "-" we replace 17 3 - with 14. we are at the end and return 14

function calc(expr) {
    const elements = expr.split(' ')
    const stack = []

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        if (!isNaN(element)) {
            stack.push(Number(element))
        } else {
            const operand2 = stack.pop()
            const operand1 = stack.pop()

            if(element === "+") {
                stack.push(operand1 + operand2)
            } else if (element === "-") {
                stack.push(operand1 - operand2)
            } else if (element === "*") {
                stack.push(operand1 * operand2)
            } else if (element === "/") {
                stack.push(operand1 / operand2)
            }
        }
    }

    return stack.pop()
  }
