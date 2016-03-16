/**
 * Created by seanestevaKiosked on 3/16/16.
 */
function greet (whattosay) {

    return function ( name ) {
        console.log( whattosay + ' ' + name );
    }

}

//greet('Hi')('Tony');

//something unusual is happening here

var sayHi = greet('Hi');
sayHi('Tony');

//how is this possible? due to CLOSURES

//what happens to memorys pace when global execution context goes away?
//garbage collection normally happens

//even though greet and its execution context has finished any functions within it will still have access to what is stored in memory, allowing it go down the scope chain to find it even though its not ther eanymore
//execution context has closed in its inner variables, the variables it would normally have reference to even though those execution contexts are gone
//this phenomenon is called CLOSURE!!


//it's a feature of the JS language, they just happen, it's not a command or antyhing like that - SCOPE REIMAINS INTACT


