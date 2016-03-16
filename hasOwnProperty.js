/**
 * Created by seanestevaKiosked on 3/15/16.
 */
var myObj = {
    // finish myObj
    name: "mohammed"

};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

//adding to an object using if and hasOwnProperty

var suitcase = {
    shirt: "Hawaiian"
};

// console.log(suitcase.shorts);

if (suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts)
} else {
    suitcase.shorts = "bannana republic"
};

console.log(suitcase)