/**
 * Created by seanestevaKiosked on 3/16/16.
 */
var logName = function (lang1, lang2 ) {

    console.log('Logged: ' + this.getFullName());

    console.log('Arguments: ' + lang1 + ' ' + lang2);

    console.log('---------- ------- --- - - --- ');

}

/* pass whatever variable you want to be the this variable, so it makes  acopy of the logNae function and sets up an object with the copy so that whenevr it isi run adn the execution context is created, the JS engine can see that it was created with bind */
var logPersonName = logName.bind(person);

logPersonName('en');


logPersonName(); //when it says this, person will be the object


//COULD'VE DONE IT ON THE FLY
var logName = function (lang1, lang2 ) {

    console.log('Logged: ' + this.getFullName());



}.bind(person);

logName();