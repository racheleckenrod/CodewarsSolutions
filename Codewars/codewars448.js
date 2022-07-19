// The concept of "smooth number" is applied to all those numbers whose prime factors are lesser than or equal to 7: 60 is a smooth number (2 * 2 * 3 * 5), 111 is not (3 * 37).

// More specifically, smooth numbers are classified by their highest prime factor and your are tasked with writing a isSmooth/is_smooth function that returns a string with this classification as it follows:

// 2-smooth numbers should be all defined as a "power of 2", as they are merely that;
// 3-smooth numbers are to return a result of "3-smooth";
// 5-smooth numbers will be labelled as "Hamming number"s (incidentally, you might appreciate this nice kata on them);
// 7-smooth numbers are classified as "humble number"s;
// for all the other numbers, just return non-smooth.
// Examples:

// isSmooth(16) === "power of 2"
// isSmooth(36) === "3-smooth"
// isSmooth(60) === "Hamming number"
// isSmooth(98) === "humble number"
// isSmooth(111) === "non-smooth"
// The provided input n is always going to be a positive number > 1.

function isSmooth(n) {
    if(n % 7 === 0){
      return "humble number"
    }else if(n % 5 === 0){
      return "Hamming number"
    }else if(n % 3 === 0){
      return "3-smooth"
    }else if(n % 2 === 0){
      return "power of 2"
    }else{
      return "non-smooth"
    }
    //your code here
  }






function isSmooth(n) {
    let arr=[];
    let i = 2;
    while(i<=n){
        if(n%i == 0) {
            n= n/i;
            arr.push(i);
        } else {
            i++;
        }
    }
    let x = Math.max(...arr)
    if(x === 7){
        return "humble number"
      }else if(x === 5){
        return "Hamming number"
      }else if(x === 3){
        return "3-smooth"
      }else if(x === 2){
        return "power of 2"
      }else{
        return "non-smooth"
      }
}