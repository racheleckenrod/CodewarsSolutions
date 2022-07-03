// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

// good luck :)

function evil(n) {
    let binary = 0
    let arr = []
    binary = n.toString(2)
    console.log(binary)
    arr = binary.split('')
    console.log(arr)
    newArr = arr.filter(element => element === '1')
    console.log(arr,newArr)
    if(newArr.length % 2 === 0){
        return "It's Evil!"
    }else{
        return "It's Odious!"
    }

}
console.log(evil(66))

function evil(n) {
    let binary = 0
    let arr = []
    binary = n.toString(2)
    arr = binary.split('')
    newArr = arr.filter(element => element === '1')
    if(newArr.length % 2 === 0){
        return "It's Evil!"
    }else{
        return "It's Odious!"
    }
}
