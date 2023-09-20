// Create a function that takes two arguments:

// An array of objects which feature the season, the team and the country of the Champions League winner.

// Country (as a string, for example, 'Portugal')

// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

// For example if the input array is as follows:


// countWins(winnerList1, 'Spain') => should return 2
// countWins(winnerList1, 'Portugal') => should return 1
// countWins(winnerList1, 'Sportland') => should return 0

// STRINGSARRAYSDATA STRUCTURESALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// const winnerList1 = [
//   { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
//   { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
//   { season: '1998–99', team: 'Manchester United', country: 'England' },
//   { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
//   { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
//   { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
//   { season: '2002–03', team: 'Milan', country: 'Italy' },
//   { season: '2003–04', team: 'Porto', country: 'Portugal' },
//   { season: '2004–05', team: 'Liverpool', country: 'England' },
//   { season: '2005–06', team: 'Barcelona', country: 'Spain' },
//   { season: '2006–07', team: 'Milan', country: 'Italy' },
//   { season: '2007–08', team: 'Manchester United', country: 'England' },
//   { season: '2008–09', team: 'Barcelona', country: 'Spain' },
//   { season: '2009–10', team: 'Internazionale', country: 'Italy' },
//   { season: '2010–11', team: 'Barcelona', country: 'Spain' },
//   { season: '2011–12', team: 'Chelsea', country: 'England' },
//   { season: '2012–13', team: 'Bayern', country: 'Germany' },
//   { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
//   { season: '2014–15', team: 'Barcelona', country: 'Spain' },
//   { season: '2015–16', team: 'Real Madrid', country: 'Spain' }
// ];


// Test.assertEquals(countWins(winnerList1, 'Portugal'), 1);
// Test.assertEquals(countWins(winnerList1, 'FootLand'), 0);
// Test.assertEquals(countWins(winnerList1, 'Spain'), 9);
//   });
// });

// PREP
// P: we are given an object and a value
// R: we are to return the number of times a key has the given value.
// E: see above
// P: we need to loop through the object and add one to a count every time the country key is equal to the given value. and return the count.


function countWins(winnerList, country) {
    let count = 0

    for (let obj of winnerList) {
        if (obj.country === country){
            count += 1
        }
    }

    return count
    // your awesome code here
  }