// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// describe("Basic tests", function(){
//     Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
//     Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
//     Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
//     Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
//     Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
//     Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
//     Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
//     Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
//     });

// PREP
// P: we are given an array of strings
// R: we are to return an array of strings that have all the consecutive letters removed.
// E: if given ['all', 'abordddd'] we are to return ['al', 'abord']
// P: we will use regex to replace duplicate chars with one of them. pushing the result into a new results arr and returning it. we will also need to loop through the given array


function dup(s) {
    let result = []

    for (let i = 0; i < s.length; i++) { 
        let duplicates = /(.)\1+/g
        let str = s[i].replace(duplicates, '$1')
        result.push(str)

    }
    return result
    };
    console.log(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha'])


    // a one-liner with map()
    // function dup(s) {
//   return s.map(x => x.replace(/(.)\1+/g,'$1'))
// };
