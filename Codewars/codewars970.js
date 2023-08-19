
// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var maze = [[1,1,1,1,1,1,1],
//             [1,0,0,0,0,0,3],
//             [1,0,1,0,1,0,1],
//             [0,0,1,0,0,0,1],
//             [1,0,1,0,1,0,1],
//             [1,0,0,0,0,0,1],
//             [1,2,1,0,1,0,1]];
            
// Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish", "Expected Finish");
// Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), "Finish", "Expected Finish");
// Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]), "Finish", "Expected Finish");

// Test.assertEquals(mazeRunner(maze,["N","N","N","W","W"]), "Dead", "Expected Dead");
// Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), "Dead", "Expected Dead");

// Test.assertEquals(mazeRunner(maze,["N","E","E","E","E"]), "Lost", "Expected Lost");


//   });
// });

// PREP
// P: we are given an array of arrays containing numbers 0,1,2,3 and an array of letters "N", "S", "E", and "W". we are to start at number 2 and follow directions given in the directions array until either we get to a 1 , 3 or undefined.
// R: we are to return a string depending on circumstances. if we encounter a 1 or undefinded we are to return "Dead", if we encounter 3, we are to return "Finish" and if we reach the end of the directions array we are to return "Lost"
// E: if given maze = [[1,1,1], [1,2,1],[1,3,1]] and directions = ["S"] we are to return "Finish"
// P: we need to find the starting point and set it equal to a variable that can handle what array within the array it is, and the position in the array. we need to change the variable according to the directions and then check the maze for the corresponding number at that, the next, position and proceed from there, returning a value or getting another direction. perhaps an object with keys of array and position will work. to set the obj = {array: , position: } and find these values by looping through the array and looking for the two. if ( arr[i][j] === 2)
// obj = {array: i, position: j}
// then change the values of the object according to the directions. "N" is i -1
// "S" is i + 1, "E" is j - 1 and "W" is j + 1. then check the maze at that position, and return something or get the next direction if it is equal to 0. until the end of diections, in which case return "Lost"
// I learned that the order of the conditionals when testing for "dead" was critically important and made a breaking change.



function mazeRunner(maze, directions) {
    let obj = {array: 0, position: 0}

    // find the 2 and update obj
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                obj = {array: i, position: j}
            }
        }
    }

    // follow directions:
    for (let i = 0; i < directions.length; i++){
        if (directions[i] === "N") {
            obj.array -= 1
        } else if (directions[i] === "S") {
            obj.array += 1
        } else if (directions[i] === "W") {
            obj.position -= 1
        } else if (directions[i] === "E") {
            obj.position += 1
        }

        if (obj.array < 0 || obj.array >= maze.length || obj.position < 0 || obj.position >= maze[obj.array].length || maze[obj.array][obj.position] === 1) {
            console.log(obj)
            return "Dead"
        } else if (maze[obj.array][obj.position] === 3) {
            return "Finish"
        }
    }
    return "Lost"
  }
  console.log(mazeRunner( [[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]], ["N","N","N","N","N","E","E","E","E","E"] ))