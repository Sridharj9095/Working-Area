console.log("12" / "2"); //implicit conversion
console.log("12" + "2"); //concatination occurs

let age = 23;
console.log(typeof age);
//number converts into string (datatype only changed)
age = String(age);
console.log(age);
console.log(typeof age);

let num = "24";
console.log(typeof age);
//string converts into number
num = Number(num);
console.log(num);
console.log(typeof num);
//any string conversion into number gives NaN
//can't converts any strings into number other than 'true' and 'false'
