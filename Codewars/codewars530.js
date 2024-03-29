// Implement the methods anyMatch (any_match in PHP) & allMatch (all_match in PHP), which accepts a linked list (head) and a predicate function, and returns true if any / all of the elements apply to the given predicate.

// For example:

// Given the list: 1 -> 2 -> 3, and the predicate x => x > 1, anyMatch / any_match should return true (both 2 & 3 are valid for this predicate), and allMatch / all_match should return false (1 is not valid for this predicate)

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

// describe("anyMatch & allMatch", function() {

//     it("basic tests", function() {
//       Test.assertEquals(anyMatch(null, x => false), false);
//       Test.assertEquals(anyMatch(null, x => true), false);
//       Test.assertEquals(allMatch(null, x => false), true);
//       Test.assertEquals(allMatch(null, x => true), true);
//       Test.assertEquals(anyMatch(listFromArray([1, 2, 3]), x => x > 1), true);
//       Test.assertEquals(allMatch(listFromArray([1, 2, 3]), x => x > 1), false);
//     });
  
//   });




// function anyMatch(head, p) {
//     return p.includes(head)
//   }
  
//   function allMatch(head, p) {
//     return p.every(head)
//   }

// my solution did not work out but I found this: 
// https://github.com/Automedon/CodeWars-7-kyu-Soluitions-part-2/blob/master/Fun%20with%20lists:%20anyMatch%20%2B%20allMatch.js


  function anyMatch(head, p) {
    console.log(head, "any",p)
    return head ? p(head.data) || anyMatch( head.next, p ) : false
  }
  
  function allMatch(head, p) {
    console.log(head, p)
    return head ? p(head.data) && allMatch( head.next, p ) : true
  }
  