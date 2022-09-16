// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']




function capMe(names) {
    let lower = names.map(item => item.toLowerCase())
    let caps = lower.map(item => item.slice(0,1).toUpperCase() + item.slice(1))
    return caps
}
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))