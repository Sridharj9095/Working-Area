// 7 + 11 = 18
// + is an operator
// 7, 11 are operands

// unary
let x = -1;
x = -x;
console.log(x);

// binary +, -, *, /, %, **
let a = 12,
  b = 5;
let sum = a % b; //gives remainder
console.log(sum);

// unary +
let y = "12",
  z = "6";
let total = +y + +z;
console.log(total);

// modify in place
let c = 12;
c += 3;
console.log(c);

// increment / decrement
let d = 13;
console.log(d++); //post increment
console.log(d);
console.log(d--); //post decrement
console.log(d);

let m = 12,
  n = 13;
let o = ++m + n--; // pre-increment m is 13
console.log(o);
