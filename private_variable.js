/**
 * Created by seanestevaKiosked on 3/15/16.
 */
//Private Variables
//Good! But what if an object wants to keep some information hidden?
//
//Just as functions can have local variables which can only be accessed from within that function, objects can have private variables. Private variables are pieces of information you do not want to publicly share, and they can only be directly accessed from within the class.
//
//The Person class has been modified to have a private variable called bankBalance. Notice that it looks just like a normal variable, but it is defined inside the constructor for Person without using this, but instead using var. This makes bankBalance a private variable.

function Person(first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;
}

// create your Person
var john = new Person ("Jeff", "Johnson", 33)

// try to print his bankBalance
console.log(jeff.bankBalance);

