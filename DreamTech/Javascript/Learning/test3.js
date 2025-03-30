const inputNum = [1, 2, 3, 4];
const outputNum = [];
console.log("----InputNum----", inputNum);
const totalValue = inputNum.reduce(getProduct, 1);
function getProduct(product, number) {
  return product * number;
}
console.log("----TotalValue----", totalValue);
for (let number of inputNum) {
  const eachNumber = totalValue / number;
  outputNum.push(eachNumber);
}
console.log("----OutputNum----", outputNum);
