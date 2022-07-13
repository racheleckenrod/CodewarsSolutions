// Let us begin with an example:

// Take a number: 56789. Rotate left, you get 67895.
// number.shift() then push that number... I think there is a better way using slice here...

// Keep the first digit in place and rotate left the other digits: 68957.

// Keep the first two digits in place and rotate the other ones: 68579.

// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.

// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

// So max_rot (or maxRot or ... depending on the language) is such as:

// max_rot(56789) should return 68957

// max_rot(38458215) should return 85821534
// 
// PREP
// I played around with this long enough without doing prep
// Parameters:
// given a number
// Results:
// are to return the Max value of the result of shifting the numbers- rotating them in this way- leave the first digit, remove second digit and place it at the end, then remove third digit and place it at the end.
// example- 12345 , 13452 , 13524, 1352...and the last one is 4 so we were done the number before. there will be n-2 numbers where n is the length of the number. I think it would be easiest to reference a constant and pull the add on digit from there call it "num" and it is an array. then make a new array with num as first element. will ADD n.length-3 numbers to the array. (then take the max value and return it)
// from the array of        num[0],num[1],num[2],num[3],num[4],num[5]
// the first number will be num[0],num[2],num[3],num[4],num[5],num[1]
// the second number will be num[0],num[2],num[4],num[5],num[1],num[3]
// the third number will be num[0],num[2],num[4],num[1],num[3],num[5]
// maybe a nested loop- if there is another digit , make a new number, then will need a loop to make that new number. it will start at position whatever iteration we are on 
// function maxRot(n) {
//     var str = n.toString();
//     var arr = [str];
//     console.log(arr,str)
//     for (var i=0;i<=str.length-2 ;i++){
//         str = str.slice(0,i)+str.slice(i+1)+str[i];
//         arr.push(str.split().join());
//         console.log(str)
//     }
//     return Math.max(str);

// }

function maxRot(n) {
    let str = n.toString();
    let arr = [str];
    for (let i = 0;i <= str.length-2 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str);
        console.log(str,arr)
    }
    return Math.max(...arr);
}
//     console.log(n)
//     let num = n.toString().split("")
//     let sequ = [num]
//     let newNum = []
//    for(let i = 0; i < num.length - 1; i++){
   
//     newNum  = num.slice(0,i)+num.slice(i+1)+num[i];
    // arr.push(str.split().join());

    // console.log(newNum)
// }
// return Math.max.apply(null, arr);
// }
    
//   }

  console.log(maxRot(12345678))