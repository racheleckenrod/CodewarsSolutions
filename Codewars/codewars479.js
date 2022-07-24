// You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.

// Task:
// The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.

// Example:
// date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

// Notes:
// The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
// You have: a0 > 0, p% > 0, a >= a0

// PREP
// Parameters:
// given an amount of money, an interest rate, and a target amount of money.
// Result:  are to return a string of the date that you reach the amount ..
// the start date remains the same- January 1, 2016
// the interst rate is daily and they say to divide it by 36000 for to get a daily rate.
// so perhaps the equation looks something like amount *= p*36000 until you get to the target amount and add that many days to jan 1 2016...

function dateNbDays(a0, a, p) {
    let days = 0
    while(a0 <= a){
         a0 += a0*p/36000
        days += 1
        console.log(a0,a,p)
    }
    let date = new Date("2016-1-1")
    date.setDate(date.getDate() + days)
    return date.toISOString().slice(0,10)
	// your code
}

console.log(dateNbDays(100, 101, 0.98))