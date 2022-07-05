// Fun with ES6 Classes #1 - People, people, people
// Time for some OOP fun!

// Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

// Have fun! :D

// describe("Example Tests", () => {
//     // Default Arguments Test
//     Test.assertEquals(new Person().firstName, "John");
//     Test.assertEquals(new Person().lastName, "Doe");
//     Test.assertEquals(new Person().age, 0);
//     Test.assertEquals(new Person().gender, "Male");
//     Test.assertEquals(new Person().sayFullName(), "John Doe");
//     // Example Custom Test
//     Test.assertEquals(new Person("Jane", "Doe", 25, "Female").firstName, "Jane");
//     Test.assertEquals(new Person("Jane", "Doe", 25, "Female").lastName, "Doe");
//     Test.assertEquals(new Person("Jane", "Doe", 25, "Female").age, 25);
//     Test.assertEquals(new Person("Jane", "Doe", 25, "Female").gender, "Female");
//     Test.assertEquals(new Person("Jane", "Doe", 25, "Female").sayFullName(), "Jane Doe");
//   });

class Person {
    constructor(firstName,lastName,age,gender){
        this.firstName = firstName || "John"
        this.lastName  = lastName || "Doe"
        this.age = age || 0  
        this.gender = gender || "Male"
    }
    sayFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`
    }
    }