/**
 * Created by seanestevaKiosked on 3/16/16.
 */

function buildFunctions () {

    //array literal syntax
    var arr = [],
        i = 0;

    for ( i ; i < 3 ; i++ ) {

        arr.push(

            function () {

                //i is found up the scope chain for the loop
                console.log(i);

            }

        )

    }

    return arr;
}

var fs = buildFunctions();

//because of closure, even though the execution context/stack of the functions that are being pushed is removed, i remains at 3 because that it what it incremented upto with i++ until it ended the loop

fs[0]();
fs[1]();
fs[2]();

//ES6 WAY

function buildFunctions2 () {

    //array literal syntax
    var arr = [],
        i = 0;

    for ( i ; i < 3 ; i++ ) {

        //let variable is scoped to the block so that j will be a new variable in memory
        let j = i;

        arr.push(

            function () {

                //i is found up the scope chain for the loop
                console.log(j);

            }

        )

    }

    return arr;
}

var fs = buildFunctions2();

//because of closure, even though the execution context/stack of the functions that are being pushed is removed, i remains at 3 because that it what it incremented upto with i++ until it ended the loop

fs[0]();
fs[1]();
fs[2]();

//ES5 Way


function buildFunctions3 () {

    //array literal syntax
    var arr = [],
        i = 0;

    for ( i ; i < 3 ; i++ ) {

        arr.push(

            (function (j) {
                return function() {

                    console.log(j);
                }
            }(i)) //i will increase and be stored in each of its execution contexts

        )

    }

    return arr;
}

var fs = buildFunctions3();

//because of closure, even though the execution context/stack of the functions that are being pushed is removed, i remains at 3 because that it what it incremented upto with i++ until it ended the loop

fs[0]();
fs[1]();
fs[2]();