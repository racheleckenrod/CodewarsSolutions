// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

// //

// Add rooms here
var rooms = Object.assign({}, Array.from({length:3}, _ => Object.assign({},[{name: `room`}, {description: `square`}, {completed: true}])))


