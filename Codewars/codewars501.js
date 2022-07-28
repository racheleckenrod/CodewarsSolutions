// Description
// John's each hand has five fingers(If you are surprised, please tell me how many fingers you have ;-) Even more amazing is that when he was a child, he already had 5 fingers(one hand). At that time, he often to count the number by using his fingers.

// He is counting this way:

// a - Thumb
// b - Index finger
// c - Middle finger
// d - Ring finger
// e - Little finger

//  a  b  c  d  e
// --------------
//  1  2  3  4  5
//  9  8  7  6
//    10 11 12 13
// 17 16 15 14
//    18 19 20 21
// 25 24 23 22
//    26 27 28 29      
// 33 32 31 30 
//    34 35 36 37
// 41 40 39 38 



// if I spread this out a little...
// 
// a  b  c  d  e  d  c  b  a  b  c  d  e  d  c  b  a  b  c  d  e  d  

// we should disregard the first a = 1... 
// so starting with 2, we can have a repeating pattern of 

// b  c  d  e  d  c  b  a 
//  b  c  d  e  d  c  b  a 
//  2  3  4  5  6  7  8  9
// 10 11 12 13 14 15 16 17
// 18 19 20 21 22 23 24 25 
// 26 27 28 29 30 31 32 33 

// I want to use % 8 but I think I also need to do a plus or minus one....


// So the question is: when John counting to number n, which is the corresponding finger?

// Task
// Complete the function which accepts an integer, and returns the name of the finger on which the counting will end: "Thumb", "Index finger", "Middle finger", "Ring finger", or "Little finger".

// Examples
// 10     => B  "Index finger"
// 20     => D  "Ring finger"
// 30     => D  "Ring finger"
// 50     => B  "Index finger"
// 100    => D  "Ring finger"
// 1000   => B  "Index finger"
// 10000  => B  "Index finger"


function whichFinger(n){
    if(n % 8 === 1 || n === 1){
        return "Thumb"
    }else if(n % 8 === 2 || n % 8 === 0){
        return "Index finger"
    }else if(n % 8 === 3 || n % 8 === 7){
        return "Middle finger"
    }else if(n % 8 === 4 || n % 8 === 6){
        return "Ring finger"
    }else if(n % 8 === 5){
        return "Little finger"
    }
    
    
    
  }
