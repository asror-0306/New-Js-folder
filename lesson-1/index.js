"use strict";

////// VAR

/*
var color = "green"; // declare
var color = "blue"; // re-declare
color = "red" // re-assign
console.log(color);
*/

////// LET

/*
let color = "green"; // declare
let color = "blue"; // re-declare-xxxx
color = "red" // re-assign
console.log(color);
*/

////// CONST

/*
const color = "green"; // declare
const color = "blue"; // re-declare-xxxx
const = "red" // re-assign-xxxx
console.log(color);
*/

//// 1.  String

/*
var str = "string";
str = 'String';
str = `Men`


console.log(str);
*/

/*
var string = '1111' + 213; // when it is + on string, it always returns String
var str = "12" - 11; // when it is - on between str and num, it returns Number
var num = "20" * 12; // it returns number and type is also number
var devision = "20" / 5; // it returns number and type is also number
var you = 11 - "ab"; // it returns NaN and type is Number
var face = 11 / "ab" // it returns NaN and type is Number
var none = 11 / 0; // it returns Infinity and type is Number
var math = 11 * 9 / "ab" // it returns NaN and type is Number
var zero = "ab" * 0 // it returns NaN and type is Number

console.log(zero);

console.log(math);
console.log(none);
console.log(face);
console.log(you);
console.log(devision);
console.log(num);
console.log(str);
console.log(string);
*/

///// 2. Number

// There is not any types of Number, every type of number is Number

/*
var num=32;
console.log(num/"q");
console.log(num/0);
console.log(num-0);
*/

////// 3. Boolean

// True and False

/*
var boolean = true;
console.log(boolean + true); // 2 Number
console.log(boolean - false); // 1 Number
console.log(boolean - "a"); // NaN
console.log(boolean + "a"); // String
console.log(boolean * "a"); // NaN
console.log(boolean / false); // Infinity
console.log(boolean / "Js"); // NaN
*/


////// 4. undefined

/*
var a;
console.log(a);
console.log(a + "a"); // String
console.log(a / "a"); // NaN
console.log(a * "a"); // NaN
console.log(a - "a"); // NaN
console.log(a + a); // NaN
console.log(a + 5); // NaN
console.log(a / 5); // NaN
console.log(a * 5); // NaN
console.log(a + true); // NaN
console.log(a - false); // NaN
console.log(a * true); // NaN
console.log(a / false); // NaN
console.log(a + 0); // NaN
console.log(a - 0); // NaN
*/


////// 5. null

/*
var none = null;
console.log(none);
console.log(none + undefined); // NaN
console.log(none * "a"); // NaN
console.log(none + true); // 1 Number
console.log(none + none); // 0
console.log(none / false); // NaN
console.log(none * true); // 0
console.log(none / "a"); // NaN
*/


////// 6. Biginteger

/*
var big = 122222222222222222n;
console.log(typeof (big));

var bigint = BigInt(1111111111111111111111n)
console.log(bigint);
*/

/////// 7. Symbol

/*
var a = Symbol("hello");
var b = Symbol("hello");

console.log(a == b);
*/


//// SCOPES

/*

{
    var a=100; 
}


console.log(a);


{
    let b=100;
}


console.log(b);


{
    const c=100;
}


console.log(c);

*/



// let a=10;
// let c=a;
// console.log(c);
