// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
//       assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
//       assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
//       })
//     })
// find index of #, and return the copy of url that goes from zero to it.

function removeUrlAnchor(url){
    if(url.indexOf("#") === -1) return url
    return url.slice(0, url.indexOf("#"))
    // TODO: complete
  }

//   many people thought to use split("#") and return the beginning or [0].