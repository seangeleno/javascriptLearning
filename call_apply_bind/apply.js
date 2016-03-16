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

(function (lang1, lang2 ) {

    console.log('Logged: ' + this.getFullName());

    console.log('Arguments: ' + lang1 + ' ' + lang2);

    console.log('---------- ------- --- - - --- ');

}).apply(person, ['en', 'es']);