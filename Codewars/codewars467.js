// mplement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

// The input m will always be smaller than or equal to n (e.g., m <= n)

// Example
// m = 2
// n = 4

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]


function generatePairs(m, n) {
    let arr = []
    let j
    for(let i = m; i <= n; i++){
        
        for(j = i; j <= n; j++){
            arr.push([ i, j])
            console.log(i,j)
        }
    
    }
  return arr
}
console.log(generatePairs(2,4))