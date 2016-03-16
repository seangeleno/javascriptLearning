/**
 * Created by seanestevaKiosked on 3/15/16.
 */
//3 ways to create an array
var arr = [];
arr[0] = 1;
arr[1] = false;
arr[2] = {name: 'Tony', address: '111 Main St'};
arr[3] = function (name) { var greeting = "Hello, my name is "; console.log(greeting + name); }
arr[4] = "hello";

var arr1 = new Array();
arr1[0] = 1;
arr1[1] = false;
arr1[2] = {name: 'Tony', address: '111 Main St'};
arr1[3] = function (name) { var greeting = "Hello, my name is "; console.log(greeting + name); }
arr1[4] = "hello";

var arr3 = [1, false, {name: 'Tony', address: '111 Main St'}, function (name) { var greeting = "Hello, my name is "; console.log(greeting + name); }, "hello"];

console.log(arr3);

//this takes the function located in arr1[3] essentially converting into a function, then within the parameters we pass the third value of the array arr1[2] and use dot notation to access its value
arr[3](arr[2].name)
arr1[3](arr1[2].name)
arr3[3](arr3[2].name)
