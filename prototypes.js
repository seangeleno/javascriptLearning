/**
 * Created by seanestevaKiosked on 3/15/16.
 */
function Dog (breed) {
    this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
    console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

var pinkman = new Dog ("French Bulldog");
pinkman.bark();

/////Animal Class

// create your Animal class here
function Animal (name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal
Animal.prototype.sayName = function () {
    console.log("Hi my name is " + this.name)
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

///////DRY Penguins

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal

Penguin.prototype = new Animal();
var pinkman = new Penguin ("Pinkman");
pinkman.sayName();