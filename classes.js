/**
 * Created by seanestevaKiosked on 3/15/16.
 */
function Person(name,age) {
    this.name = name;
    this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
    console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person (
    "Sean Esteva",
    26
);
printPersonName(me);