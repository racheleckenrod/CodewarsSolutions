// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// describe('Initial test',() => {
//     Test.assertEquals(vowel2index('this is my string'),'th3s 6s my str15ng');
//     Test.assertEquals(vowel2index('Codewars is the best site in the world'),'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
//     Test.assertEquals(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
//     Test.assertEquals(vowel2index(''), '');
//   });

// PREP
// P: we are given a string
// R: we are to return a string that has all the vowels replaced with the index + 1 that it is. upper and lower case vowels are to be used.
// E: given "codewars" we are to return 'c2d4w6rs'
// P: a good use of regex for matching the vowels and practice using it . vowel.test

function vowel2index(str) {
    let arr = str.split('')
    let vowel = /[aeiou]/i

    for(let i = 0; i < arr.length; i++){
        if(vowel.test(arr[i])){
            arr[i] = i + 1
        }
    }

    return arr.join('')
    //code me
 }
 