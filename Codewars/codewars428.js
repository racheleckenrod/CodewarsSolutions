// Hit the target
// given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
// There will be only 1 arrow '>' and 1 target 'x'
// An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
// Examples:
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', ' '], --> return true
//   [' ', '>', ' ', 'x'],
//   [' ', ' ', ' ', ' ']
// ] 
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', '>', ' ', ' '], --> return false
//   [' ', ' ', ' ', 'x'],
//   [' ', ' ', ' ', ' ']
// ] 
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', 'x', '>', ' '], --> return false
//   [' ', '', ' ', ' '],
//   [' ', ' ', ' ', ' ']
// ] 

// In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
// Happy hacking as they say!
// PREP
// this challenge is a bit intimidating as they say...
// but I think it is a bit simplier than first glance through it as the test is only for the same row or array, first of all... I think..
// so there will be two conditions- one for greater than and one for less than. if we use the indexes of them and  see... if < , the indexOf(x) would have to be less than the indexOf("<") for it to be pointing at it and then return false. The opposite would be true for the less than. indexOf(>) is less than indexOf(x). they must be in the same arr.

// function solution(mtrx){
    
//     console.log(mtrx[3].indexOf("x"))
//     console.log(mtrx[3].indexOf("<"))
//     console.log(mtrx[3].indexOf(">"))
//     console.log(mtrx[3].includes("x"))
//     console.log(mtrx.length)
//     let a = []
//     let b = []
//     let c = []
//     for(let i = 0; i < mtrx.length; i++){
//         if(mtrx[i].includes("x") || mtrx[i].includes("<" || mtrx[i].includes(">"))){
//             a.push(mtrx[i].indexOf("x"),i)
//             b.push(mtrx[i].indexOf("<"),i)
//             c.push(mtrx[i].indexOf(">"),i)
//         }
//         console.log(a,b,c)
//     }
//     if(a[1] === b[1] && a[0] < b[0]){
//         return true
//     }else if(a[1] === c[1] && a[0] > c[0]){
//         return true
//     }else{
//         return false
//     }
//    }

//    console.log(solution([
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', '>', ' ', 'x'],
//     [' ', ' ', '', ' ', ' ']
//   ]))


//   first try needed a bit of tweaking, here is the code that passed:

function solution(mtrx){
    if(mtrx === []) return false
      let a = []
      let b = []
      let c = []
      for(let i = 0; i < mtrx.length; i++){
          if(mtrx[i].includes("x") || mtrx[i].includes("<" || mtrx[i].includes(">"))){
              a.push(mtrx[i].indexOf("x"),i)
              b.push(mtrx[i].indexOf("<"),i)
              c.push(mtrx[i].indexOf(">"),i)
          }
      }
      if(a[1] === b[1] && a[0] < b[0] && b[0] >= 0){
          return true
      }else if(a[1] === c[1] && a[0] > c[0] && c[0] >= 0){
          return true
      }else{
          return false
      }
     }