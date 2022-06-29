// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

// The following function returns the logarithm of y with base x (ie. log x y ):

// function getBaseLog(x, y) {
//   return Math.log(y) / Math.log(x);
// }


function logs(x , a, b){
    return (Math.log(a)/Math.log(x)) + (Math.log(b)/Math.log(x))
    }