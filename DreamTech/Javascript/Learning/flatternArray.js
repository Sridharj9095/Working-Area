const numbersArr = [1, 2, [3, 4], 5, [6]];
let newArr = [];
for (let i = 0; i < numbersArr.length; i++) {
  const currentItem = numbersArr[i];
  if (!Array.isArray(currentItem)) {
    newArr.push(currentItem);
  }
  for (let j = 0; j < currentItem.length; j++) {
    newArr.push(currentItem[j]);
  }
}
console.log(newArr);
