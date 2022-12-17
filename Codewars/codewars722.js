// Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

// Trailing zeros should be left out. For example

// squareRoot(39) // => 6.245;
// rather than

// squareRoot(39) // => 6.24500;
// ALGORITHMS

// describe("Square root", () => {
//     it("example tests", () => {
//       Math.sqrt = null;
//       Math.pow = null;
//       assert.strictEqual(squareRoot(81), 9);
//       assert.strictEqual(squareRoot(15), 3.87298);
//       assert.strictEqual(squareRoot(21), 4.58258);
//     });
//   });

// function squareRoot(x) {
//     let low = 0
//     let high = +Math.floor(x/2).toFixed(5)
    
//     while(low < high){
//         const mid = +((low + high)/2)
//         console.log(mid, mid * mid, +(mid * mid).toFixed(5))
//         if(+(mid * mid) === x){
//             return mid
//         }
//         if(mid * mid > x){
//             high = mid - .00001
//             if(+(mid * mid) === x){
//                 return mid
//             }
        
//         } else {
//             low = mid + .00001
//             if(+(mid * mid) === x ){
//                 return mid
//             }
        
//         }
//         console.log(low,high)
        
//     }
//     // return high
//     return  x === +(mid * mid).toFixed(5) ? +mid.toFixed(5)  
//           : x > +(mid * mid).toFixed(5) ? +mid.toFixed(5) + .00001
//           : x < +(mid * mid).toFixed(5) ? +mid.toFixed(5) - .00001
//           : null
    
//   }



// function squareRoot(x) {
//     if(x === 1) return 1
//     console.log("x=", x)
//       let low = 0
//       let high = +Math.floor(x/2)
//       let mid = 0
      
//       while(low <= high){
//           mid = +((low + high)/2).toFixed(5)
//           console.log(mid, mid * mid, +(mid * mid).toFixed(5))
//           if(+(mid * mid).toFixed(5) === x){
//             console.log("A")
//               return +mid.toFixed(5)
//           }
//           if(mid * mid > x){
//               high = mid - .00001
//               if(+(mid * mid).toFixed(5) === x){
//                  console.log("B")
//                   return +mid.toFixed(5)
//               }
          
//           } else {
//               low = mid + .00001
//               if(+(mid * mid) === x ){
//                  console.log("C")
//                   return +mid.toFixed(5)
//               }
          
//           }
//           console.log(low,high, mid,"end","high=", Math.abs(x - (high * high)), "low=", Math.abs(x - (low * low)),"mid=", Math.abs(x - (mid * mid)))
           
  
  
          
//       }
//   //     if(Math.abs(x - (mid * mid)) < (Math.abs(x - (low * low) )) && Math.abs(x - (mid * mid)) > Math.abs(x - (high * high)) ){
//   //        return mid
//   //      }                                                         
        
//   //     }else{
//   //       return +low.toFixed(5)
       
//   //     }
    
//   //   check- find absolute value of difference and return the value with the smallest difference..
    
    
    
//   //   console.log("test", mid)
//       return x === +(mid * mid).toFixed(5) ? mid
//             : x - +(mid * mid).toFixed(5) > .00001 ?  +(mid + .00001).toFixed(5)
//             : x -  +(mid * mid).toFixed(5) < -.00001 ?  +(mid.toFixed(5) - .00001).toFixed(5)
//             : null
          
    
          
//       }

//   console.log(squareRoot(101.), 10.04988)

  const square = (n, a, b) => {
    console.log("n=",n, "a=", a, "b=", b)
    let mid = (a + b) / 2;
    let mul = mid * mid;
    if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
        console.log("mul===n", "n=",n, "a=", a, "b=", b)
       return mid;
    }else if (mul < n){
        console.log("mul<n", "n=",n, "a=", a, "b=", b)
       return square(n, mid, b);
    }else{
        console.log("else", "n=", n, "a=", a, "b=", b)
       return square(n, a, mid);
    }
 }
 // Function to find the square root of n
 const findSqrt = num => {
    let i = 1;
    const found = false;
    while (!found){
       // If n is a perfect square
       if (i * i === num){
          return i;
       }else if (i * i > num){
        console.log("num=", num)
          let res = square(num, i - 1, i);
          return +res.toFixed(5);
       };
       i++;
    }
 }
 console.log(findSqrt(101));

//  to find the square root, we need to find what number times itself is equal to the number given.
// first we get an integer range- between i-1 and i.
// then we take i - 1 and set that to a and i to b.
// take the average, set to mid and see if it is correct, or if the sqrt is less or more than mid.
// to check, we do a mid * mid = att and compare with x.

// if att is more than x,
// we halve the distance between upper limit, b and the mid. we can then change the range to lower limit(a) to OLDmid and upper to same, b. 

 function squareRoot(x) {
    console.log("run test")
    let i = 1
    let found = false
    while (!found){
        if (i * i === x){
            return i
        }else if(i * i > x){
            found = true
            i -= 1
        }
        i++
    }
    let a = i - 1
    let b = i 
    let mid = (a + b)/2
    let att = mid * mid
    let difference = Math.abs(x - att)
    let count = 0
    console.log("between whiles", att, a,b,mid,(Math.abs(x - att)))
    while( difference > .00001 && count < 10000){
       console.log("after second while", att, x)
        if(att < x){
            console.log("less")
            a = mid
            mid = (mid + b)/2
           
            console.log(mid,att,difference)
            
        }
        if(att > x){
            console.log("more")
            b = mid 
            mid = (a + mid)/2  
                
        }
        att = mid * mid
        difference = Math.abs(x - att)
      
        // if(att < x){
        //     console.log("att<x",a,b,i,att,x)
        //     mid = (mid + b)/2
        //     att = mid * mid

        //     console.log(mid,att)
        //     // b = mid
        // }
        // if(att > x){
        //     mid = (a + mid)/2
        //     // a = mid
        //     att = mid * mid

        //     console.log("elseif",a,b, att, mid)
        // }
        console.log(x,a,b,mid,att,difference)
            // return "string"
        // }
        count ++
  
    }
    return +mid.toFixed(5)
}
console.log(squareRoot(101))