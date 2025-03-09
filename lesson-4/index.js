"use strict";

// Function Declaration

// function name(a, b, c) {
//     console.log(a, b, c);

// }

// name(1, 2, 3)


// // Function Expression

// const app=function(a,v,d){
//     console.log(a,v,d);

// }

// const func=app;

// func(45, 67, 33)
// app(true, "hello", null)

// //  Arrow Function

// const arrow = (a, b, c,) => {
//     console.log(a, b, c,);

// }

// const arrowFun=arrow;

// arrowFun(90, 0, 98)
// arrow(23,45,67)



// Immediately Invoked Function Expression

// (
//     function (a, b, c,) {
//         console.log(a, b, c);

//     }(12, 67, 89)
// )



// return Keyword

// function myName(that, you){
//      return that+you
// }



// const result=myName(56,undefined)
// console.log(result );


// const myFunc = function (a, b) {
//     return a + b
// }

// const fun = myFunc("I love you ", "baby");
// console.log(fun);

// console.log(myFunc(90, 134));

/*
const act = function (a, action, b) {
    switch (action) {
        case "+": return a + b; break;
        case "-": return a - b; break;
        case "*": return a * b; break;
        case "/": return a / b; break;
        default: return "not found";
    }

}

const re = act(11, "+", 45);
const me = act(11, "*", 45);
console.log(me);

console.log(re);
*/



// const youTube = (a, b) => a + b;
// console.log(youTube(67, 65));



///// Default Value

// function test(a, b = 0) {
//     console.log(a + b);
// }
// test(12, 30);


// const getInfo = function (a = 12, b = 21) {
//     console.log(a,b);
// }

// getInfo("salom", "iflos")

// const full = (a = 3, b = 2) => a + b;
// console.log(full(9, 29));





//////// Array

// const color = ["green", "red", "pink", "grey"]
// console.log(color.length);

// const cars = ["Nexia", "BMW", "Damas"];
// console.log(cars);

// const num = [];
// num[0] = 100;
// num[1] = true;
// num[3] = "hello";
// console.log(num);


// const numm=[1,2,3,4,5,6,7];
// numm[0]="my name is Asror"
// console.log(numm);

// const newArr = [34, 13, 5, 78, 46];
// newArr[newArr.length]=4098;
// console.log(newArr);


// const defineNum=[1,2,3,4,5];
// console.log(defineNum[defineNum.length-5]);

// const del = ["you tube", "facebook", "telegram", "instagram"];
// delete del[1];
// console.log(del);


// const mySymbol = [13, 34, 213, 542323];
// const [a, b, c, d, e] = mySymbol;
// console.log(e);


// const rest = [23, 4, 5, 6];
// const [a,b, ...w]=rest;
// console.log(w);


// const a=[45,67,45,34];
// const b=[23,122,45,6];

// const all=[...a, ...b];
// console.log(all);


// const letters = ["a", "b", "c", "d", "g", "h"];

// for (let index = 0; index < letters.length; index++) {
//     if(letters[index]==="c") continue;
//     console.log(letters[index]);

// }

// const str = ["you", "my", "our", "woefweg"];
// for (let key in str) {
//     console.log(str);
// }

// for (let el of str) {
//     console.log(el);
// }
