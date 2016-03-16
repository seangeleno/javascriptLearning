/**
 * Created by seanestevaKiosked on 3/15/16.
 */

//Accessing Private Variables
//Although we cannot directly access private variables from outside the class, there is a way to get around this. We can define a public method that returns the value of a private variable.

function Person(first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;

    this.getBalance = function() {
        // your code should return the bankBalance
        return bankBalance;
    };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance)
// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();

console.log(myBalance);

//Why did that code work? An object's private variables can only be accessed by other methods that are part of that same object. So, we just used an object's public method to access a private variable!