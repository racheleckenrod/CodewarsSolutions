// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// this will need one formula... return a number that is derived from the given number. for example 1 = year rounded down- floor of year/100 oh no- rounded up...

function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }