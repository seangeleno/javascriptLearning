/**
 * Created by seanestevaKiosked on 3/16/16.
 */

var person = {

    firstname: "Sean",
    lastname: "Esteva",
    getFullName: function () {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
};

var logName = function (lang1, lang2 ) {

    console.log('Logged: ' + this.getFullName());

};

//call will let us control what this means
logName.call(person, 'en', 'es');
//unlike bind which creates a copy of the function, call actually executes the function


var person2 = new Object();

person2.firstname = "Jane";
person2.lastname = "Doe";

person.getFullName.apply(person2);
console.log(person.getFullName.apply(person2));

//you can grab methods from other objects and use the as long as they have similar property names