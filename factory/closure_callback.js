/**
 * Created by seanestevaKiosked on 3/16/16.
 */
function sayHiLater () {
    var greeting = "Hi";

    setTimeout(function () {

        console.log(greeting);

    }, 3000)
}

//First class functions
//Settimeout takes a function object, passing it as a parameter, making use of first class functions
//taking advantage of a function expression;

sayHiLater();

//thanks to closure the sayHiLater goes up the scope chain and has a closure for greeting variable, knows where it was sitting in the execution context

// jQuery uses function expressions and first-class functions!
//$("button").click(function(){
//
//})

//Callback Function: a function you give to another funcftion, to be run when the other functino is finished
function tellMeWhenDone (callback) {

    var a = 1000, //some work
        b = 2000; // some more work

    callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function(){
    console.log('I am done');
});

tellMeWhenDone(function(){
    alert('I love tacos');
});
