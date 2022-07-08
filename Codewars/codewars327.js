// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args


function Cube(n = 0) {
    this.side = Math.abs(n);
    this.getSide = function() {
        return this.side
    };
    this.setSide = function(n) {
        this.side = Math.abs(n)
        return this.side
    };
}