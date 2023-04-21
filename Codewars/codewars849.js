// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// const { assert } = require("chai");

// describe("Sample test", () => {
//   it("Should pass sample tests", () => {
//     assert.equal(domainName("http://google.com"), "google");
//     assert.equal(domainName("http://google.co.jp"), "google");
//     assert.equal(domainName("www.xakep.ru"), "xakep");
//     assert.equal(domainName("https://youtube.com"), "youtube");
//   })  
// })

// PREP 
// P: we are given a url string, may contain several formats
// R: we are to return a string of just the domain name.
// E: see above
// P: we can split the string at several places. the "//" or a "www." 

function domainName(url){
    if(url.includes("//")){
        url = url.split('//')
        let domain = url[1].split('.')

        if(domain[0] === "www"){
            return domain[1]
        }else{
            return domain[0]
        }
    } else {
        let domain = url.split('.')
        if(domain[0] === 'www'){
            return domain[1]
        }else {
            return domain[0]
        }
        
    }

   

   

    console.log(url, domain)
    return url.join('')
    //your code here
  }
  console.log(domainName( "http://www.github.com/carbonfive/raygun"))