// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

// describe("Testing", function(){
//     it("Basic tests", function(){
//       Test.assertEquals(countRedBeads(0), 0);
//       Test.assertEquals(countRedBeads(1), 0);
//       Test.assertEquals(countRedBeads(3), 4);
//       Test.assertEquals(countRedBeads(5), 8);
//     });
//   });

function countRedBeads(n) {
    if(n < 2){
        return 0
    }else{
        return 2 * (n-1)
    }
    //your code here
  }