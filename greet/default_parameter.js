/**
 * Created by seanestevaKiosked on 3/16/16.
 */
function greet(firstname, lastname, language) {

    //we can default to a certain parameter value by using ||

    language = language || "english";

    if (language === 'english') {

        console.log('Gday mate, ' + firstname + ' ' + lastname);
    }

    if (language === 'spanish') {

        console.log('Hola senior ' + firstname + ' ' + lastname + ', quiero tacos?');
    }

if (language === 'finnish') {

    console.log('Hei ' + firstname + ' ' + lastname + ', haluat juoda alkoholittoman oluen tänään ?');
    }
}

function greetEnglish (firstname, lastname) {

    greet(firstname, lastname, 'english');
}

function greetSpanish (firstname, lastname) {

    greet(firstname, lastname, 'spanish');
}

greet("Edvard", "Karvinen", "finnish");
greetEnglish('John', 'Doe');
greetSpanish('Jose', 'Cuervo');

//function overloading