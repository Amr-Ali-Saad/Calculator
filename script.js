/*  
1: storage the nums in one first index together
2: if the user clicked any operator ,storage it in new index
3: then storage the new nums in a new index

or

1: first step ↑
2: make if question{if (operator == "+" or (etc...) )
operator = + 'or (etc...)'
3: third step ↑

https://www.simplilearn.com/tutorials/javascript-tutorial/calculator-in-javascript

*/
"use strict";

let clear = document.querySelector(".C");
let keys = document.querySelectorAll(".key");
let nums = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let screen = document.querySelector(".screen");
let resultScreen = document.querySelector(".result");
let operationScreen = document.querySelector(".opration");
// let operation = [0, 0];
// let operator;
// let result;

// function display() {
//     for (let i = 0; i < keys.length; i++) {
//         keys[i].addEventListener("click", function () {
//             if(keys[i].textContent !== "=")
//             operationScreen.textContent = operationScreen.textContent + keys[i].textContent;
//         });
//     }
// }
// display();

// function keysCalculator() {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i].addEventListener("click", function () {
//             if (
//                 result === undefined &&
//                 nums[i].textContent !== "+" &&
//                 nums[i].textContent !== "-" &&
//                 nums[i].textContent !== "/" &&
//                 nums[i].textContent !== "*"
//             ) {
//                 operation[0] = Number(operation[0] + nums[i].textContent);
//             }
//             if (nums[i].textContent === "+") {
//                 result = operation[0] + operation[1];
//                 operator = "plus";
//             }
//             if (nums[i].textContent === "-") {
//                 result = operation[0] - operation[1];
//                 operator = "minus";
//             }
//             if (nums[i].textContent === "*") {
//                 result = operation[0] * operation[1];
//                 operator = "multiply";
//             }
//             if (nums[i].textContent === "/") {
//                 result = operation[0] / operation[1];
//                 operator = "division";
//             }
//             if (
//                 result !== undefined &&
//                 nums[i].textContent !== "+" &&
//                 nums[i].textContent !== "-" &&
//                 nums[i].textContent !== "/" &&
//                 nums[i].textContent !== "*" &&
//                 operator == "plus"
//             ) {
//                 operation[1] = Number(operation[1] + nums[i].textContent);
//                 result = operation[0] + operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }
//             if (
//                 result !== undefined &&
//                 nums[i].textContent !== "+" &&
//                 nums[i].textContent !== "-" &&
//                 nums[i].textContent !== "/" &&
//                 nums[i].textContent !== "*" &&
//                 operator == "minus"
//             ) {
//                 operation[1] = Number(operation[1] + nums[i].textContent);
//                 result = operation[0] - operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }
//             if (
//                 result !== undefined &&
//                 nums[i].textContent !== "+" &&
//                 nums[i].textContent !== "-" &&
//                 nums[i].textContent !== "/" &&
//                 nums[i].textContent !== "*" &&
//                 operator == "multiply"
//             ) {
//                 operation[1] = Number(operation[1] + nums[i].textContent);
//                 result = operation[0] * operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }
//             if (
//                 result !== undefined &&
//                 nums[i].textContent !== "+" &&
//                 nums[i].textContent !== "-" &&
//                 nums[i].textContent !== "/" &&
//                 nums[i].textContent !== "*" &&
//                 operator == "division"
//             ) {
//                 operation[1] = Number(operation[1] + nums[i].textContent);
//                 result = operation[0] / operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }

//             console.log(operation);
//         });
//     }
//     equal.addEventListener("click", function () {
//         console.log(result);
//         resultScreen.textContent = result;
//     });
//     clear.addEventListener("click", function () {
//         resultScreen.textContent = "";
//         operationScreen.textContent = "";
//         operation[0] = 0;
//         operation[1] = 0;
//         result = undefined;
//     });
// }
// keysCalculator();

// function keyboardCalculator() {
//     document.addEventListener("keydown", (event) => {
//         let key = event.key;
//         let oper = ["+", "-", "*", "/", "÷", "×"];
//         if (key.length === 1) {
//             if (!isNaN(key) || oper.includes(key)) {
//                 operationScreen.textContent = operationScreen.textContent + key;
//             }
//             if (
//                 result === undefined &&
//                 !oper.includes(key)
//             ) {
//                 operation[0] = Number(operation[0] + key);
//             }
//             if (key === "+") {
//                 result = operation[0] + operation[1];
//                 operator = "plus";
//             }
//             if (key === "-") {
//                 result = operation[0] - operation[1];
//                 operator = "minus";
//             }
//             if (key === "*" || key === "×") {
//                 result = operation[0] * operation[1];
//                 operator = "multiply";
//             }
//             if (key === "/"|| key === "÷") {
//                 result = operation[0] / operation[1];
//                 operator = "division";
//             }
//             if (
//                 result !== undefined &&
//                 !oper.includes(key) &&
//                 operator == "plus"
//             ) {
//                 operation[1] = Number(operation[1] + key);
//                 result = operation[0] + operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }
//             if (
//                 result !== undefined &&
//                 !oper.includes(key) &&
//                 operator == "minus"
//             ) {
//                 operation[1] = Number(operation[1] + key);
//                 result = operation[0] - operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }
//             if (
//                 result !== undefined &&
//                 !oper.includes(key) &&
//                 operator == "multiply"
//             ) {
//                 operation[1] = Number(operation[1] + key);
//                 result = operation[0] * operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }
//             if (
//                 result !== undefined &&
//                 !oper.includes(key) &&
//                 operator == "division"
//             ) {
//                 operation[1] = Number(operation[1] + key);
//                 result = operation[0] / operation[1];
//                 console.log(operation[0]);
//                 console.log(operation[1]);
//             }

//             console.log(operation);
//         }
//         if(key === "c" || key === "C" || key === "ؤ" || key === "Backspace"){
//             console.log("C");
//             operationScreen.textContent = "";
//             resultScreen.textContent = "";
//             operation[0] = 0;
//             operation[1] = 0;
//             result = undefined;
//             console.clear()
//         }
//         if(key === "Enter" || key === "="){
//             resultScreen.textContent = result;
//             console.log(operation);
//         }
//     })
// }
// keyboardCalculator();

function display() {
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", function () {
            if (keys[i].textContent !== "=")
                operationScreen.textContent =
                    operationScreen.textContent + keys[i].textContent;
        });
    }
}
display();

function keyboardCalculator() {
    document.addEventListener("keydown", (event) => {
        let key = event.key;
        let oper = ["+", "-", "*", "/", "÷", "×"];
        if (key.length === 1) {
            if (!isNaN(key) || oper.includes(key)) {
                operationScreen.textContent = operationScreen.textContent + key;
            }
        }
    });
}
keyboardCalculator();

//A Failed Try (-_-) :-
/*
if (operationScreen.style.width == "200px") {
    operationScreen.style.fontSize = `calc(${operationScreen.style.fontSize}- 5px)`
    console.log(5);
}
// screen.style.width = "1000px"
// 13
// operationScreen.textContent = "5555555555555"

let screenLength = operationScreen.textContent.length

if(screenLength == 13){
    operationScreen.style.fontSize = `${operationScreen.style.fontSize - 5}px`;
    console.log(5);
}
*/

clear.addEventListener("click", function () {
    resultScreen.textContent = "";
    operationScreen.textContent = "";
});

equal.addEventListener("click", function () {
    resultScreen.textContent = eval(operationScreen.textContent);
});
document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key == "Enter") {
        resultScreen.textContent = eval(operationScreen.textContent);
    }
    if (key == "Backspace" || key == "Delete" || key == "c" || key == "C") {
        resultScreen.textContent = "";
        operationScreen.textContent = "";
    }
});
