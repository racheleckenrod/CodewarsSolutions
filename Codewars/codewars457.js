// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

// PREP
// Parameters:
// given two strings
// results:
// are to return one string with the overlapping end of the first string with the beginning of the second string. if they are the same , it would be the return of just one of them. I dont have an imediate way to test for this..
// because we are not testing if the exact end of string one is the same as the start of string two, but if they overlap. perhaps we could take the first letter of the second string and check for the index of it in the first string and then when found see if the next letter of the second string is the next letter of the first.- there are some issues like getting to the next index of, because even checking for the last index of wouldn't be foolproof because of repeating letters or overlappings. seems best to begin at the beginning and check all the way through. - we will need to assume that they could be the same. so, maybe check index[0] of both for to be the same and if not go to index [1] of string one, etc. 

// then when a match is found, go to the next letters and use an && so that you come out the end with all matching. 

// lets say that there is partial overlapping. we need a way to know what to return. 

// function mergeStrings(first, second){
//     first = first.split('')
//     second = second.split('')
//     console.log(first,second)
//     let k = 1
//     for(let i = 0; i < first.length; i++){
//         console.log(second[0], first[i])
        // if(second[0] === first[i]){
        //     console.log(second[0], first[i])
        //     // do something - check if the rest of first matches the next letters of second and if they do, return the combined
        //     for(let j = 1; j < first.length - i; j++){
        //         if(second[j] === first[i + j]){
        //             // combine....?
        //             console.log(second[j], first[i + j])
        //             k++
        //         }
                // first.push(result)
//                 console.log("inside for loop")
//             }
//             return first.join("") + second.slice(k).join('')
//         }
//     }
//     return first.join('') + second.join('')
//   }
//   console.log(mergeStrings( 'abcde', 'abcde'))

//   my first attempt did pass some tests but to refactor this code to get it to pass all the tests may prove to be not such a good time investment and it may be better to take a different approach.

// after search the string methods I think checking ends with may be a better approach. I can start with the whole second string, and if it does, return 



// function mergeStrings(first, second){
//     console.log(first.slice(0,1),"first")
//     let length = second.length
//     for(let i = 0; i < second.length; i++){
//         // console.log(mergeStrings('abcde', 'cdefgh'))
//         str = second.slice(0,length - i)
//         console.log(str, "test")
//         if(first.endsWith(str)){
//             console.log(str,i)
//             console.log(second.slice(i),"TEST",i,str.length)
//             return first.slice(0, str.length) + second
//         }else{
//             console.log("nothing")
        
//         }
//     }
//     }
//     console.log(mergeStrings('abcdefg', 'efgh'))

// This took me quite a long time to complete, and I am happy only that I did not give up on it and found a way to refactor my code to make it pass all the tests.
    function mergeStrings(first, second){
        let length = second.length
        for(let i = 0; i < second.length; i++){
            str = second.slice(0,length - i)
            if(first.endsWith(str)){
                return first.slice(0, first.length - str.length) + second
            }
        }return first + second
        }