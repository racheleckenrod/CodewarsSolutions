// Odd bits are getting ready for Bits Battles.

// Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

// Return an array of all the steps.

// 1 <= n <= 8

// NOTE: n != 0, because n represents the number of 1s.

// Examples

// This resembles a simple 8 LED chaser:

// n = 3

// 00000111
// 00001110
// 00011100
// 00111000
// 01110000
// 11100000
// n = 7

// 01111111
// 11111110
// BITSBINARYARRAYSFUNDAMENTALS


function bitMarch (n) {
    let arr = []
    let bit = [0,0,0,0,0,0,0,0]
    let shift = 0

    while(bit[0] === 0){
        bit = [0,0,0,0,0,0,0,0]
        for(let i = n; i > 0; i--){
            bit[bit.length - shift - i] = 1
            console.log(bit, i)
        }
        arr.push(bit)
        console.log(arr)

        shift += 1
    }
	return arr
}
console.log(bitMarch(3))