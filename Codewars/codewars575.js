// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// PREP
// Parameters:
// given a number
// Results:
// are to return a diamond shape, if the number is odd

// first return null if num is neg or even,
// then for loop to start with n - i / 2 number " ", then i number of "*" then the spaces and a \n

// then will need to add the second half of the diamond, by repeating the lines in descending order

function diamond(n){
     if(n % 2 === 0 || n <= 0 ){
        return null 
     }else{
        let dia = []
        let a = " "
        let b = "*"
        for(let i = 1; i <= n; i+=2){
            dia.push(a.repeat((n-i)/2)+ b.repeat(i) + "\n" )
        }

        for(let i = dia.length - 1; i >= 0; i--){
            dia.push(dia[i])
        }
        return dia.join("")
     }
        
    
    
  }
  console.log(diamond(7))

//   had an extra   + a.repeat((n-i)/2)  initially.....