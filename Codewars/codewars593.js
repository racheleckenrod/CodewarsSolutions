// Capitalize First Letter of a String
// Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

// Input	Output
// string	String
// hello World	Hello World
// i love codewars	I love codewars
// This sentence is already capitalized	This sentence is already capitalized
// 0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
// JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

// String.prototype.capitalize = function (string){
//     if(this.string.charCodeAt(string[0]) > 96 && string.charCodeAt(string[0]) < 123){
//       return this.toString[0].fromCharCode(string.charCodeAt(0) - 32) + this.toString.slice(1)
//     }
//   }
    

// for whatever reason the charCodeAt(0) was not working when I put it in the if statement but I was ablr to get this to pass: 


  String.prototype.capitalize = function (){
    let num = this.toString().charCodeAt(0)
    let letter = String.fromCharCode(num - 32)
    if(num > 96 && num < 123){
      return letter + this.toString().slice(1)
    }else{
      return this.toString()
    }
  }
    
  