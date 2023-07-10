// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence


// describe("Basic tests",function(){
//     Test.assertSimilar(Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34]);
//     Test.assertSimilar(Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
//     Test.assertSimilar(Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]);
//     Test.assertSimilar(Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
//     Test.assertSimilar(Xbonacci([1,0,0,0,0,0,0,0,0,0],20),[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);
//     })


// PREP
// P: we are given an array and a number.
// R: we are to return an array containing the given array and the sum of it, followed by the sum of the previous signature.length elements  up to the number given


function Xbonacci(signature,n){
    let results = signature.slice()

    if (n <= signature.length) {
        return results.slice(0,n)
    }

    for (let i = signature.length; i < n; i++) {
        let nextElement = results.slice(i - signature.length, i).reduce((acc,c) => acc + c,0)
        results.push(nextElement)
    }

    return results
    //your code here
  }