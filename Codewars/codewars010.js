// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
   str = str.split(" ").reverse().join(' ');
//    
return str
  }
  console.log(nameShuffler('john McClane'))