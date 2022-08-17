// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

// Task: Given the summary, find the number of pages n the book has.

// Example
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 123456789,10,11,12131415,16,17....98,99,100,101,102
// 9 + 2*99-9 + 3*102-
// Be aware that you'll get enormous books having up to 100.000 pages.

// All inputs will be valid.

// Here's the opposite kata, which is more complex (Paginating a huge book)

// const chai = require("chai");
// const assert = chai.assert;

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//         assert.strictEqual(amountOfPages(5), 5)
//         assert.strictEqual(amountOfPages(25), 17)
// 25 -9 = 16 / 2 = 8. 8+9= 17
//         assert.strictEqual(amountOfPages(1095), 401)   
// 1095 - 9 =  1086 - 90*2 =  906.  906/3 + 90 + 9  = 401
//         assert.strictEqual(amountOfPages(185), 97)

// 185 - 9 = 176/2 + 9 = 97
//         assert.strictEqual(amountOfPages(660), 256)

// 9999 - 9 = 9990 - 90*2 = 9810 - 900*3 = 7110/4 = 1777.5
//   });
// 99999 - 9 - 90*2 - 900*3 - 9000*4 = k/5 + 38889
// });
// 287139 - 9 - 90*2 - 900*3 - 9000*4 - 90000*5 = k/6 + 488889

// PREP
// Parameters:
// we are given a Number that represents the number of digits of all the page numbers in a book.
// Results:
// we are to return the number of pages in the book.

// example:
//  given 20 ,
// we would return one for each digit from 1 to 9. if n > 9, and less than 100 (three digit numbers) we would have one for each of the first 9, so n - 9, then two for each number up to 99. at 100, each page has three digits

// the way I thought to do it, subtracting 99 from n, then dividing the difference by three is not coming up with the correct answer...

// summary = 9 + (two for each number from 10 to 99) + (three for each number frm 100 to 999 ) + (4 for each number from 1000 to 9999)

// onedigitnumbers + twodigitnumbers + threedigitnumbers = n 

// for summary = 185, there is one page for each 1-9, a  page for every two digits 10 - 99, then a page for every three digits over 99.

function amountOfPages(summary){
    if(summary < 10){
        return summary
    }else if(summary < 100){
        return (summary - 9)/2 + 9
    }else if(summary < 1000){
        return (summary - 189)/3 + 99
    }else if (summary < 10000){
        return (summary - 189)/3 + 99
    }else if (summary < 10000){
        return (summary - 2888)/5 + 2888
    }
  
}

// after much trouble, I finally figured out that the cut off numbers are not the 10,100,1000 but comething else.

// find the summary for each multiple of Ten 
// if pages = < 10, summary < 10

// if pages < 100. summary < 190
// 99 - 9 = 90*2 = 180 + 9
// (summary - 9)/2 + 9 

// if pages < 1000, summary < 910
// 999 - 9 - 180 = {999 - 189} = 810 + 99 = 909

// if pages < 10000, summary < 8110
// 9999 - 9*1 - (90*2) - (900*3) {= 9999 - 2889} = 7110 + 999 = 8109

// if pages < 100000, summary < 71110
// 99999 - 9*1 - (90*2) - (900*3) - (9000*4) = {= 99999 - 38889 } = 61110 + 9999

// if pages < 1000000, summary < 611110
// 999999  - 9*1 - (90*2) - (900*3) - (9000*4) - (90000*5) = {999999 - 488889 } = 511110 + 99999 = 611109



function amountOfPages(summary){
    console.log(summary)
        if(summary < 10){
          return summary
      }else if(summary < 190){
          return (summary - 9)/2 + 9
      }else if(summary < 2890){
        console.log("t")
          return ((summary - 189)/3) + 99
      }else if (summary < 3889){
          return (summary - 2889)/4 + 999
      }else if (summary < 48889){
        console.log("MM")
          return (summary - 38889)/5 + 9999
      }else if (summary < 588889){
        return (summary - 488889)/6 + 99999
      }
    
  }


  function amountOfPages(summary){
    let count = 0
    let res = summary
    for(let i = 1; i<summary; i++){
      count+=i.toString().length
      if(count==summary) res = i
    }
    
    return res
    }


    function amountOfPages(summary){
        if (summary > 488889){ //the book has 100000-999999 pages
          return (summary - 488889)/6 + 99999;
        } else if (summary > 38889){//the book has 10000-99999 pages
          return (summary - 38889)/5 + 9999;
        } else if (summary > 2889){//the book has 1000-9999 pages
          return (summary - 2889)/4 + 999;
        } else if (summary > 189){//the book has 100-999 pages
          return (summary - 189)/3 + 99;
        } else if (summary > 9){//the book has 10-99 pages
          return (summary - 9)/2 + 9;
        } else{ //the book has 1-9 pages
          return summary;
        }
      }

// My refactored solution!!
      function amountOfPages(summary){
        if(summary < 10){
            return summary
        }else if(summary < 190){
            return (summary - 9)/2 + 9
        }else if(summary < 2890){
            return ((summary - 189)/3) + 99
        }else if (summary < 38890){
            return (summary - 2889)/4 + 999
        }else if (summary < 488890){
            return (summary - 38889)/5 + 9999
        }else if (summary < 5888890){
          return (summary - 488889)/6 + 99999
        }
    }    
  