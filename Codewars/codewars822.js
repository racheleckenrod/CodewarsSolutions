// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// describe("Example tests",() =>{
//     Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
//       randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//       laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//       mr: 'finance' }), 'kill me now');
//     Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
//       randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
//       katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
//       alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
//     Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
//       randy: 'pissing about', sandy: 'finance', andy: 'change',
//       katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
//       john: 'retail', mr: 'pissing about' }), 'party time!!');
//     })

// PREP
// P: we are given an object with names and departments
// R: we are to return a sentiment based on the tally of the number corresponding to the departments.
// E: 
// P: need to convert the departments to the numbers, sum them up and return an expression based on the number.


function boredom(staff){
  let scores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  };

  let score = Object.values(staff).map(value => scores[value]).reduce((acc, c) => acc + c,0)

return score <= 80 ? 'kill me now' : score > 100 ? 'party time!!' : 'i can handle this'
  console.log(score)
}

console.log(boredom({ tim: 'accounts', jim: 'accounts',
      randy: 'pissing about', sandy: 'finance', andy: 'change',
      katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
      john: 'retail', mr: 'pissing about' }))