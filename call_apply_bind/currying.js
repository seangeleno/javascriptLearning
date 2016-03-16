/**
 * Created by seanestevaKiosked on 3/16/16.
 */
//CURRYIGN allows you to take a function and set pre-set parameters - useful for mathematical calculations

function multiply (a, b) {

    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);

var multiplyByTwo(4);

var multiplyByTwoByTwo = multiply.bind(this, 2, 2);

//giving it parameters sets permanent values of these parameters when the copy is made
//by setting 2, the first parameter will always be a 2 in this copy of the function

//SAME AS DOING
/*
function multiplyByTwo (b) {

    var a = 2;
    return a * b;

}
*/

//give me a copy of this function where the this variable is set up and  i'm also setting a permanent value for this first parameter
// whenever you call it, you've done away with teh first parameter and any paramter you pass it will act as b