// Create a function, as short as possible, that returns this lyrics.
// Your code should be less than 300 characters. Watch out for the three points at the end of the song.

// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark!
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark!
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark!
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark!
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark!
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt!
// Run away,…

// Good Luck!
// PREP
// Parameters: nothing
// Return: the lyrics given with less than 300 characters of code...
// Pseudocode:
// not really sure how to approach this problem. I see several patterns, and several problems... maybe I could start with a for loop for each of the verses. there are the commas and then the exclaimation mark to account for, can I put a repeat inside of a repeat? a temporate literal?

function babySharkLyrics(){
    
    // let d = " doo"
    let n = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"]
    // let chorus = x => x + `, ${d.repeat(6)}\n`
    // x => x + "," + ' doo'.repeat(6) + "\n";
    // let verse = `${chorus(v).repeat(3)}${v}!\n`

    // return v.reduce((acc,x) => acc + `${verse}`, "") + 'Run away,…'

    let chorus = x => x + "," + ' doo'.repeat(6) + "\n";
    
    let verse = v => chorus(v).repeat(3) + `${v}!\n`
    
    return n.reduce((a,c) => a+verse(c) , "") + 'Run away,…'
    
    // your code here
  }

  console.log(babySharkLyrics())

//   // https://www.codewars.com/kata/baby-shark-lyrics-generator/train/javascript
// let n = ['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"];
// let doo = x => x + "," + ' doo'.repeat(6) + "\n";
// let line = v => doo(v).repeat(3) + `${v}!\n`
// let babySharkLyrics = () => n.reduce((a,v) => a+line(v) , "") + 'Run away,…'


function babySharkLyrics(){
    names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
    return names.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
  }


  function babySharkLyrics(){
    verses = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark','Let\'s go hunt'];
    end = '\nRun away,…';
  return verses.map(el => `${`${el},${' doo'.repeat(6)}\n`.repeat(3) }${el}!`).join('\n').concat(end)
}

const babySharkLyrics=_=>(['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"].map(i=>(i+','+' doo'.repeat(6)+`
`).repeat(3)+i+'!').join`
`+'\nRun away,…');

// EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY