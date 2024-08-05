let a = 1;
let b = 2;
let c = "+";

function calc(a, b, c) {
  if (c === "+") {
    return a + b;
  }
  else  if (c === "-") {
    return a - b;
  }

  else  if (c === "/") {
    return a / b;
  }
  else  if (c === "*") {
    return a * b;
  }
}
console.log("Sum is "+calc(a, b, "*")+".");


// function sum(a, b) {
//   return a + b;
// }
// console.log("Sum is "+sum(a, b)+".");

// function diff(a, b) {
//     return a - b;
//   }
//   console.log("Difference is"+diff(a, b)+".");



// let result;
// let ch = "+";

// switch (ch) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "/":
//     result = a / b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   default:
//     console.log("Invalid choice.");
// }
// console.log("Result is "+result+".");
