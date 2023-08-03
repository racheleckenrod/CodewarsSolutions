// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(greet("Niks"), "hello Niks!", "try again");
// Test.assertEquals(greet(null), null, "try again");
//   });
// });

// PREP
// P: we are given a name or null
// R: if null, we are to return null, else return "hello name"
// E: see above
// P: we need a simple conditional to check for null and else return the "hello name"

function greet(name) {
    if (name === null || name === "") {
        return null
    }else {
        return `hello ${name}`
    }

}