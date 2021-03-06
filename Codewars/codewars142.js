// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// lets see if a little speudocode will make some better code...
// if true && true return false should do it, 


    function xor(a, b) {
        if(a && b){
            return false
          }else if(!a && !b){
            return false
          }else if(a || b){
            return true
          }
        }

        // function xor(a, b) {
        //     return a != b;
        //   }
        //   I wanted to but couldn't come up with this solution on my own today- instead of getting smaller and refactored into this one, I kept adding more code to get it to pass the tests. It sure seemed to me that it could be done very simply but this solution did not come to me. I started with only the first conditional and then it wanted more...