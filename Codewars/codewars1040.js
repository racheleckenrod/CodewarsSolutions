// While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

// If you have the input-array:

// [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
// it should output

// [ [ "bar_", "bar@bar.com" ] ]
// You have to use the filter-method which returns each element of the array for which the filter-method returns true.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// describe( "Testing some lists", function(){
//     it( "Basic list", function(){
//       var a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ],
//       b = [ [ "bar_", "bar@bar.com" ] ];    
//       Test.assertSimilar( searchNames( a ).join(":"), b.join(":"),
//         "not correct" );
//     } );
//   } );
  

// PREP
// P: we are given an array of arrays of two elements each- a username and an email.
// R: we are to return an array of arrays contianing all the arrays in which the username ends with an "_". we must use the method "filter"
// E: if given [["ed_", "ed@ed.com"], ["sally", "sally@sally.com"], ["mary_", "mary@mary.com"]] we are to return [["ed_", "ed@ed.com"], ["mary_", "mary@mary.com"]]
// P: we filter the array item[0].endsWith("_") then push the whole element into a return array and return it.



function searchNames( logins ){
    return logins.filter((item => item[0].endsWith("_")))
}

console.log(searchNames([["ed_", "ed@ed.com"], ["sally", "sally@sally.com"], ["mary_", "mary@mary.com"]]))