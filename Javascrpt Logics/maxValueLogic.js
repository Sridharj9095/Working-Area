const items = [
  { id: 1, name: "Watch", price: 3599 },
  { id: 2, name: "Shoe", price: 4499 },
  { id: 3, name: "Belt", price: 1199 },
];
const mostExpensive = items.reduce((max, item) =>
  item.price > max.price ? item : max
);
console.log(mostExpensive);

// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after a certain event or operation is completed
