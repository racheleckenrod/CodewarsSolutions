// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// describe("Basic", function(){
//     Test.assertEquals(dashatize(274), "2-7-4", "Should return 2-7-4");
//     Test.assertEquals(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
//     Test.assertEquals(dashatize(86320), "86-3-20", "Should return 86-3-20");
//     Test.assertEquals(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
//   });
//   describe("Weird", function(){
//     Test.assertEquals(dashatize(NaN), "NaN", "Should return NaN");
//     Test.assertEquals(dashatize(0), "0", "Should return 0");
//     Test.assertEquals(dashatize(-1), "1", "Should return 1");
//     Test.assertEquals(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
//   });

// PREP
// P: we are given a pos, neg, or NaN number
// R: we are to return a string, removing the negative if there, and putting a dash "-" before and after every odd digit, except at the end. return NaN for all non-numbers.
// E: if given 549348, we are to return "5-4-9-3-48"
// P: first take the Math.abs(), then check each digit for odd/even, pushing the even digits into a temp variable, and when finding an odd digit, push temp variable into return array, and push odd digit into return array. then join array with "-". 
  


  function dashatize(num) {
    if(num !== Number(num)) return 'NaN'
    let nums = Math.abs(num).toString().split('')

    let evens = ''
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens += nums[i]
        } else {
            if (evens != '') {
                result.push(evens)
                evens = ''
            }
            result.push(nums[i])
        }
    }
    if (evens != '') {
        result.push(evens)
    }
    return result.join("-")
    //get 'em
  }
  console.log(dashatize(-28369))