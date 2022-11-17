// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

// Task:

// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

// describe("Tests", () => {
//     it("test", () => {
//   var apple=[
//   ["B","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"]
//   ],answer=[0,0];
//   Test.assertSimilar(sc(apple), answer, "good luck!");  
  
//   apple=[
//   ["A","A","A","A","A"],
//   ["A","B","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"]
//   ],answer=[1,1];
//   Test.assertSimilar(sc(apple), answer, "good luck!"); 
  
//   apple=[
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","B","A","A","A"]
//   ],answer=[4,1];
//   Test.assertSimilar(sc(apple), answer, "good luck!"); 
//     });
//   });
  
//   PREP
// Parameters:
// we are given an array of arrays
// Results:
// we are to return the location of the "B" in the array.
// Pseudocode:
// loop through the array and return the index in an array of [array, index]

function sc(apple){
    for(let i = 0; i < apple.length; i++){
        for(let j = 0; j < apple[i].length; j++){
            if(apple[i][j] == "B"){
                return [i,j]
            }
        }
    }
    
  }