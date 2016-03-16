/**
 * Created by seanestevaKiosked on 3/16/16.
 */
//Special Methods - call()

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

}

//call will let us control what this means
logName.call(person, 'en', 'es');
//unlike bind which creates a copy of the function, call actually executes the function



//
///* This example above give an error as it returns undefined because this.getFullname within logName points to the global execution context*/
///* However, if we use the call method it will work */
//
//var person = {
//
//    firstname: "Sean",
//    lastname: "Esteva",
//    getFullName: function () {
//
//        var fullname = this.firstname + ' ' + this.lastname;
//        return fullname;
//
//    }
//};
//
