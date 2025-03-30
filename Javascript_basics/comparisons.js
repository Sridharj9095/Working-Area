// a > b
let a = 4,
  b = 6;
let result = a > b;
console.log(result); //flase

// x != y
let x = 12,
  y = 13;
let res = x != y;
console.log(res); //true

// boolean datatype comparison
let m = "0";
m = Boolean(m);
let n = 0;
n = Boolean(n);
//anything inside a string determined as true,expty string as false
console.log(m, n); // true, false
console.log(m == n); //false
console.log("0" == 0); //'0'- datatype changed into number => true
console.log("0" === 0); // strict comparion - compares datatypes => false
console.log(null == undefined); //pre-defined True
console.log(null === undefined); //false
//when we convert undefined as number it returns 'NaN'.
