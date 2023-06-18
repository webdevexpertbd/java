"use strict";

// let a = 3 + 2;

// switch (a) {
//     case 1:
//         alert('Too small');
//         break;
//     case 2:
//         alert('not exactly');
//         break;
//     case 4:
//         alert('exactly');
//         break;
//     default:
//         document.write('Sorry, no number found');
// }

// let mySubject = "accounting";

// switch (mySubject) {
//     case "Bengali":
//         document.write('Your are selected for bengali');
//         break;
//     case "English":
//         document.write('Your are selected for English');
//         break;
//     case "Computer":
//         document.write('Your are selected for Computer');
//         break;
//     case "accounting":
//         document.write('Your are selected for accounting');
//         break;
//     case "Management":
//         document.write('Your are selected for Management');
//         break;
//     default:
//         document.write('Sorry, subject not match');
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         alert('Today is ' + day);
//         break;
//     case 1:
//         day = "Monday";
//         alert('Today is ' + day);
//         break;
//     case 2:
//         day = "Tuesday";
//         alert('Today is ' + day);
//         break;
//     case 3:
//         day = "Wednesday";
//         alert('Today is ' + day);
//         break;
//     case 4:
//         day = "Thursay";
//         alert('Today is ' + day);
//         break;
//     case 5:
//         day = "Friday";
//         alert('Today is ' + day);
//         break;
//     case 6:
//         day = "Saturday";
//         alert('Today is ' + day);
//         break;
//     default :
//         day = "not match";
//         break;
// }

function doubleIt(num) {
    var result = num * 3;
    return result;
}

let firstNumber = doubleIt(5);
let secondNumber = doubleIt(100);

let total = firstNumber + secondNumber;

document.write(total);