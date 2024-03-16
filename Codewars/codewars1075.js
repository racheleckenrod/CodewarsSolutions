// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(solution('abcdeb','b'), 2);
// Test.assertEquals(solution('abc','b'), 1);
// Test.assertEquals(solution('abbc','bb'), 1);
// });
// });

// PREP
// P: we are given a test string and a search string.
// R: we are to return the number of instances of the search string in the test string.
// E: if given "abcabc" and search : "a" we are to return 2.
// P: since we cannot have any overlap, we will need to take into account when there is a match found and continue searching After the match. so if we make a loop, we need to advance the loop equal to the length of the search variable -1.




function solution(fullText, searchText){
    let count = 0
    for (let i = 0; i < fullText.length; i++){
        if (fullText.slice(i, (i + searchText.length)) === searchText){
            count += 1;
            i += searchText.length - 1
        }
    }
  return count
}
console.log(solution('abcdeb','b'))
