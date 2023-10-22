// Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)
// Should yield the same result as

// d(c(b(a(input))))


// describe('tests suite', function () {

//     const { deepEqual } = require('chai').assert;

//     function doTest(functions, arg, expected) {
//         const actual = chained(functions)(arg);
//         deepEqual(actual, expected);
//     }

//     it('sample tests', function () {
//         function f1(x) { return x * 2 }
//         function f2(x) { return x + 2 }
//         function f3(x) { return Math.pow(x, 2) }

//         function f4(x) { return x.split("").concat().reverse().join("").split(" ") }
//         function f5(xs) { return xs.concat().reverse() }
//         function f6(xs) { return xs.join("_") }

//         // functions,      arg,    expected
//         doTest([f1, f2, f3], 0, 4);
//         doTest([f1, f2, f3], 2, 36);
//         doTest([f3, f2, f1], 2, 12);
//         doTest([f4, f5, f6], "lorem ipsum", "merol_muspi");
//     });
// });

function chained(functions) {
    return function(input) {
        let result = input
        for (const func of functions) {
            result = func(result)
        }

        return result
    };
  }