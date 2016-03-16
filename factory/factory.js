/**
 * Created by seanestevaKiosked on 3/16/16.
 */
function makeGreeting (language) {
    return function (firstname, lastname) {

        language = language || "english";

        if (language === 'english') {

            console.log('Hello, ' + firstname + ' ' + lastname);
        }

        if (language === 'spanish') {

            console.log('Hola senior ' + firstname + ' ' + lastname + ', quiere tacos?');
        }

        if (language === 'finnish') {

            console.log('Hei ' + firstname + ' ' + lastname + ', haluat juoda alkoholittoman oluen tänään ?');
        }
    }
}

//rather than passing language to the inner function you're passing it to the outer function and returning the inner function so the language will be trapped in the closure,
//it will look up the scope chain and

var greetEnglish = makeGreeting('english');
var greetSpanish = makeGreeting('spanish');
var greetFinnish = makeGreeting('finnish');

//you can invoke these in two ways, either directly at the time of setting it to a variable or after

var sayHiEnglish = makeGreeting('english')('John', 'Doe');
var sayHiSpanish = makeGreeting('spanish')('Pablo', 'Escobar');
var sayHiFinnish = makeGreeting('finnish')('Edvard', 'Karvinen');

//here we invoke after
greetEnglish('John', 'Doe');
greetSpanish('Pablo', 'Escobar');
greetFinnish('Edvard', 'Karvinen');