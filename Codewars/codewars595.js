// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++


// function generateShape(integer){
//     let x = "+"
//     let string = x.repeat(integer) + '\n'
//     let arr = []
//     for(let i = 0; i < integer; i++){
//         arr.push(string)
//     }
//     console.log(arr)
//     return arr.join('').slice(0, length - 1)

// }
console.log(generateShape(6))


function generateShape(integer){
    let x = "+"
        let string = x.repeat(integer) + '\n'
        let arr = []
        for(let i = 0; i < integer; i++){
            arr.push(string)
        }
        arr = arr.join('')
        return arr.slice(0, arr.length - 1)
    
    
    }